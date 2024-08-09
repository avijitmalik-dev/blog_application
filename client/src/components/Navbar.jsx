import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <>
      <div className="flex flex-row justify-end gap-4 items-center p-10 bg-gray-50">
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/register">
          <button className="bg-yellow-300 py-2 px-6">Sing In</button>
        </Link>
      </div>
    </>
  );
}
