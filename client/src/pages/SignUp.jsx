import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSingUp = async () => {
    const data = {
      username,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        data
      );
      console.log("Response:", response.data);
      setEmail("");
      setPassword("");
      setUserName("");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      // Handle specific errors or log them for debugging
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-lg sm:text-4xl text-center font-semibold my-10">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="user"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="button"
          value="Sign Up"
          className="bg-slate-700 p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80"
          onClick={() => handleSingUp()}
        />
      </form>
      <div className="font-bold mt-5 capitalize">
        <span>have an account ? </span>
        <Link to="/sign-in">
          <span className="text-blue-800">sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
