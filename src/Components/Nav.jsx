import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-600 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-white text-3xl font-extrabold tracking-wide">MyShop</h1>
        <ul className="hidden md:flex gap-8">
          <Link to="/">
            <li className="text-white text-lg font-medium hover:underline">Home</li>
          </Link>
          <Link to="/addForm">
            <li className="text-white text-lg font-medium hover:underline">Add Product</li>
          </Link>
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600">
          <ul className="flex flex-col items-center gap-6 py-6">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li className="text-white text-lg font-medium hover:underline">Home</li>
            </Link>
            <Link to="/addForm" onClick={() => setIsOpen(false)}>
              <li className="text-white text-lg font-medium hover:underline">Add Product</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
