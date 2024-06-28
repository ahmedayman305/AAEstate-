import { Link } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetFileds = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleSignIn = async () => {
    resetFileds();
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-lg sm:text-4xl text-center font-semibold my-10">
        Sign in
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="button"
          value="Sign In"
          className="bg-slate-700 p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80 cursor-pointer"
          onClick={() => {
            handleSignIn()
            console.log(email,password)
          }}
        />
      </form>
      <div className="font-bold mt-5 capitalize">
        <span>you don&apos;t have account </span>
        <Link to="/sign-up">
          <span className="text-blue-800">sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
