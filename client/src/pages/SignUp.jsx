import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components";
import { Alert } from "antd";

function SignUp() {
    // State variables for form inputs and feedback
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Hook for navigation
    const navigate = useNavigate();

    // Function to handle the sign-up process
    const handleSignUp = async () => {
        const data = {
            username,
            email,
            password,
        };

        try {
            setLoading(true);
            const response = await axios.post(
                "http://localhost:3000/api/auth/signup",
                data
            );

            // Reset input fields on successful signup
            resetFields();
            setLoading(false);
            navigate("/");
        } catch (error) {
            // Set error message and stop loading on error
            setError("Username or Email already taken");
            setLoading(false);
        }
    };

    // Function to reset form fields
    const resetFields = () => {
        setEmail("");
        setPassword("");
        setUserName("");
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            {/* Display loading spinner if loading is true */}
            {loading && <Loading />}

            <h1 className="text-lg sm:text-4xl text-center font-semibold my-10">
                Sign Up
            </h1>

            <form className="flex flex-col gap-4">
                {/* Input field for username */}
                <input
                    type="text"
                    placeholder="username"
                    className="focus:outline-none border-2 p-3 rounded-lg"
                    id="user"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />

                {/* Input field for email */}
                <input
                    type="email"
                    placeholder="email"
                    className="focus:outline-none border-2 p-3 rounded-lg"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Input field for password */}
                <input
                    type="password"
                    placeholder="password"
                    className="focus:outline-none border-2 p-3 rounded-lg"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Button to trigger sign-up process */}
                <input
                    type="button"
                    value="Sign Up"
                    className="bg-slate-700 p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80"
                    onClick={(e) => handleSignUp()}
                />
            </form>

            {/* Link to sign-in page */}
            <div className="font-bold mt-5 capitalize">
                <span>Have an account? </span>
                <Link to="/sign-in">
                    <span className="text-blue-800">Sign in</span>
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

export default SignUp;
