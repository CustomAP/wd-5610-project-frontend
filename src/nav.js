import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import { logInUser, userLogin, logOutUser } from "./app/userSlice";
import SearchBox from "./home/searchbox";
import { useLocation } from 'react-router-dom';


function NavBar() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isLoggedIn = useSelector(userLogin);


  const location = useLocation();
  const currentPath = location.pathname;

  const shouldReloadRef = useRef(false);
  useEffect(() => {
    console.log(currentPath);
  });
  useEffect(() => {
    if (!isLoggedIn && shouldReloadRef.current) {
      shouldReloadRef.current = false;
      window.location.reload();
    }
  }, [isLoggedIn]);

  const onLogOut = () => {
    shouldReloadRef.current = true;
    dispatch(logOutUser());
    navigate("/home");
  };

  const onLogIn = async (response) => {
    let apiResonse = await fetch(`http://localhost:3001/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    });
    apiResonse = await apiResonse.json();
    shouldReloadRef.current = true;
    dispatch(logInUser(apiResonse.data));
    console.log(apiResonse.data);
    if (apiResonse.data.newUser) {
      navigate("/register");
    }
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <nav className="bg-blue-500 text-white py-4 px-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link className="text-xl font-bold mr-6" to="/home">
            Home
          </Link>
          {isLoggedIn && 
          <Link className="text-xl font-bold" to="/profile">
            Profile
          </Link>
        }
        </div>
        {currentPath!="/home" &&
        <div className="flex items-center text-black">
         <SearchBox/>
        </div>
        }
        <div className="flex items-center">
          {!isLoggedIn && (
            <GoogleLogin onSuccess={onLogIn} onError={errorMessage} />
          )}
          {isLoggedIn && (
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onLogOut}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
