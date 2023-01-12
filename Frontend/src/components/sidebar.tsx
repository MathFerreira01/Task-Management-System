import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export function Sidebar() {
  const auth = getAuth();

  function Logout() {
    signOut(auth)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        return window.alert(`Erro ${error.message}`);
      });
  }
  return (
    <div className="min-h-screen flex flex-row">
      <div className=" flex flex-col w-56 bg-white rounded-r-3xl">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl text-blue-500">Gerenciador</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <Link to="/home" className="text-sm font-medium">Home</Link>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user"></i>
              </span>
              <Link to='/register-hotel' className="text-sm font-medium">Register Hotel</Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out"></i>
              </span>
              <button onClick={Logout} className="text-sm font-medium">
                Logout
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
