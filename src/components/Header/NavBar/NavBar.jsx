import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center shadow-xl py-8 px-5 ">
      <h1 className="text-xl md:text-4xl font-semibold ">Phone Shop</h1>
      <ul className="flex gap-5 font-semibold text-lg md:text-2xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourite"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Favourite
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-400 underline" : ""
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
