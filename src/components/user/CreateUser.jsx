import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(addUserName(username));
    navigate("/book");
  }

  function handleAddTestUser() {
    const testUsername = "Test User";
    dispatch(addUserName(testUsername));
    setUsername(testUsername);
    navigate("/book");
  }

  const usernamecurr = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col items-center justify-center  shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <p className="mb-4 text-lg text-yellow-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-4 w-72 text-black pl-2 border-solid border-black border-2 rounded-md"
        />

        {usernamecurr === "" && (
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-4 hover:bg-blue-700"
            >
              Start ordering
            </button>
            <button
              type="button"
              onClick={handleAddTestUser}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 mt-5 rounded-lg"
            >
              Add Test User
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
