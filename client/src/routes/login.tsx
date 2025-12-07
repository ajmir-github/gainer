import { InfoIcon } from "lucide-react";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className=" grow max-w-md  rounded-xl border border-gray-300 flex flex-col gap-px overflow-clip">
      <h1 className=" bg-white p-4 text-lg font-bold">Login here!</h1>
      <form className="bg-white p-4 gap-4 grid">
        <div className="font-semibold text-sm">Email:</div>
        <input
          className="bg-gray-200 rounded-xl p-2"
          name="email"
          type="email"
        />
        <div className="font-semibold text-sm">Password:</div>
        <input
          className="bg-gray-200 rounded-xl p-2"
          name="password"
          type="password"
        />
        <button className="bg-blue-500 p-2 rounded-xl text-white" type="submit">
          Login
        </button>
      </form>

      <div className="bg-white p-4 flex text-red-500 gap-2">
        <InfoIcon />
        Email not found!
      </div>

      <div className="bg-white p-4 flex justify-between gap-2">
        <Link
          to={"/register"}
          className="italic hover:text-blue-600 hover:underline"
        >
          Create a new account
        </Link>
        <div className="italic hover:text-blue-600 hover:underline">
          Forget password
        </div>
      </div>
    </div>
  );
}
