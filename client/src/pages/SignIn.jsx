import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../components";
import { Alert } from "antd";
import axios from "axios";

function SignIn() {
  // State variables for email, password, error message, and loading state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Hook for navigation
  const navigate = useNavigate();

  // Function to reset form fields
  const resetFields = () => {
    setEmail("");
    setPassword("");
    setError(null);
  };

  // Function to handle sign-in process
  const handleSignIn = async () => {
    const data = {
      email,
      password,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        data
      );

      // Store the received token in local storage
      localStorage.setItem("userToken", response?.data?.token);

      // Reset form fields and navigate to the home page
      resetFields();
      setLoading(false);
      navigate("/");
      console.log(response);
    } catch (error) {
      // Set error message and stop loading on error
      setError("Username or Email already taken");
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      {/* Display loading spinner if loading is true */}
      {loading && <Loading />}

      <h1 className="text-lg sm:text-4xl text-center font-semibold my-10">
        Sign in
      </h1>

      <form className="flex flex-col gap-4">
        {/* Input field for email */}
        <input
          type="text"
          placeholder="email"
          className="focus:outline-none border-2 p-3 rounded-lg"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Input field for password */}
        <input
          type="password"
          placeholder="password"
          className="focus:outline-none border-2 p-3 rounded-lg"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button to trigger sign-in process */}
        <input
          type="button"
          value="Sign In"
          className="bg-slate-700 p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80 cursor-pointer"
          onClick={handleSignIn}
        />
      </form>

      {/* Link to sign-up page */}
      <div className="font-bold mt-5 capitalize">
        <span>You don&apos;t have an account? </span>
        <Link to="/sign-up">
          <span className="text-blue-800">Sign up</span>
        </Link>
      </div>

      {/* Display error message if there is an error */}
      {error && (
        <div className="flex justify-center mt-2">
          <div className="border-2 border-red-300 rounded-lg flex-grow max-w-lg">
            <Alert message={error} type="error" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
