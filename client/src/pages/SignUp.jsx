import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {

  const handleSingUp = async () => {};

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
        />
        <input
          type="email"
          placeholder="email"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className=" focus:outline-none  border-2 p-3 rounded-lg"
          id="password"
        />
        <input
          type="button"
          value="Sign Up"
          className="bg-slate-700 p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80"
          onClick={() => handleSingUp()}
        />
        <input
          type="button"
          value="Sign Up With Google"
          className="p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80 bg-red-900"
        />
      </form>
      <div className="font-bold mt-5 capitalize">
        <span>have an account ? </span>
        <Link>
          <span className="text-blue-800">sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
