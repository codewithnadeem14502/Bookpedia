import { useState } from "react";
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
  const usernamecurr = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col items-center justify-center h-screen shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <p className="mb-4 text-sm text-yellow-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-4 w-72 text-black pl-2  border-solid  border-black border-2 rounded-md"
        />

        {usernamecurr === "" && (
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Start ordering
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
