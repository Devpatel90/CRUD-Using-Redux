import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getApi = createAsyncThunk("api/getApi", async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
});

export const postApi = createAsyncThunk("api/postApi", async (formData) => {
  const response = await axios.post("http://localhost:3000/products", formData);
  return response.data;
});

export const deleteApi = createAsyncThunk("api/deleteApi", async (id) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
  return id;
});

export const editApi = createAsyncThunk(
  "api/editApi",
  async ({ id, formData }) => {
    const response = await axios.put(
      `http://localhost:3000/products/${id}`,
      formData
    );
    return response.data;
  }
);

const ApiSlice = createSlice({
  name: "apiSlice",
  initialState: { data: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postApi.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteApi.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(editApi.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});

export default ApiSlice.reducer;