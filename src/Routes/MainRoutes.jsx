import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../Pages/Form";
// import EditForm from "../Pages/EditForm";

function MainRoutes() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addForm" element={<Form />} />
          {/* <Route path="/editForm/:id" element={<EditForm />} /> */}
      </Routes>
    </>
  );
}

export default MainRoutes;
