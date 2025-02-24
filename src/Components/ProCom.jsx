import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi, deleteApi } from "../features/ApiSlice";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

function ProCom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  const record = useSelector((state) => state.apiReducer);

  const handleDelete = (id) => {
    dispatch(deleteApi(id));
  };

  return (
    <>
      <section className="mt-20">
        {record.loading ? (
          <p className="text-2xl text-center font-semibold">Loading...</p>
        ) : (
          <div className="p-10 flex flex-wrap justify-evenly items-center">
            {record.data.map((e, i) => (
              <div
                key={i}
                className="border overflow-hidden w-100 m-5 p-5 flex flex-col gap-3 rounded-2xl shadow-md"
              >
                <img src={e.url} className="w-full h-80 object-cover rounded-xl" alt={e.title} />
                <h1 className="font-semibold mt-3">
                  {e.title} ({e.category})
                </h1>
                <div className="flex justify-start items-center gap-3">
                  <p className="text-lg font-semibold">${e.price}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/editForm/${e.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <ModeEditIcon /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    <DeleteForeverIcon /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default ProCom;