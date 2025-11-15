import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-center shadow text-black">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-6 gap-4 grow max-w-5xl">
        <Link to={"/"} className="text-2xl font-bold uppercase text-blue-500">
          Gainer
        </Link>

        <div className="flex flex-row gap-4 font-semibold">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Products
          </NavLink>

          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Login
          </NavLink>
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Register
          </NavLink>
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500 flex"
            }
          >
            <ShoppingCart size={22} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
