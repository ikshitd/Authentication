import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      style={{ backgroundColor: "#7394af" }}
      className='p-5 navbar mb-10 shadow-lg bg-neutral text-neutral-content'
    >
      <div className='container mx-auto'>
        <div className='flex-1 px-2 mx-2 justify-end'>
          <div className='flex justify-end'>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className='btn btn-ghost btn-sm rounded-btn'
            >
              {" "}
              Register{" "}
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className='btn btn-ghost btn-sm rounded-btn'
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
