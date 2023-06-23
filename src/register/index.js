import NavBar from "../nav";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userToken, newUser, setOldUser, setUserType } from "../app/userSlice";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector(userToken);
  console.log("in register")
  // const isNewUser = useSelector(newUser);
  // useEffect(() => {
  //   if (!isNewUser) navigate("/home");
  // }, []);
   let navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const signUp = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/api/user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", token },
      body: JSON.stringify({
        userType: selectedOption,
        bio: "Short bio",
        phone: "+1 123-456-209",
        following: 0,
        followers: 0,
        spoilers: 0,
      }),
    });
    dispatch(setOldUser());
    dispatch(setUserType(selectedOption));
    navigate("/home");
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <h4>Chose the user role you would like to sign up with</h4>

        <select
          id="option"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Choose an option</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
        </select>

        {selectedOption && (
          <MDBBtn onClick={() => signUp()} color="info">
            Sign Up!
          </MDBBtn>
        )}
      </div>
    </div>
  );
}

export default Profile;
