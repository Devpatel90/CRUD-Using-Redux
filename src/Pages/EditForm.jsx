import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { editApi } from "../features/ApiSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavbarCom from "../Components/Nav";

function EditForm() {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [formData, setFormData] = useState({
    url: "",
    title: "",
    price: "",
    description: "",
    category: "",
    rating: "",
    votes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editApi({ id, formData: formData }));

    navigate("/");
  };

  return (
    <>

      <NavbarCom/>

      <div className="py-10 px-5 flex justify-center items-center min-h-screen bg-white">
        <form
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
          className="w-full max-w-lg space-y-4"
        >
          <h1 className="text-2xl font-bold text-center mb-4">Add Product</h1>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Product Image URL *</label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Product Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Product Price *</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <div className="flex flex-col">
            <label className="mb-1 font-medium">Product Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Electronics">Electronics</option>
              <option value="Women's Clothing">Women's Clothing</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold"
          >
                Edit Product
          </button>
        </form>
      </div>


    </>
  );
}

export default EditForm;
