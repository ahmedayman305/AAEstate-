import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../components";
import { Alert } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    signInFailure,
    signInSuccess,
    signInAlert,
} from "../rudex/user/userSlice";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const resetFields = () => {
        setEmail("");
        setPassword("");
    };

    const handleSignIn = async () => {
        const data = {
            email,
            password,
        };

        try {
            dispatch(signInAlert());

            const response = await axios.post(
                "http://localhost:3000/api/auth/signin",
                data
            );

            console.log("Sign-in response:", response.data);

            resetFields();

            dispatch(signInSuccess(response.data));

            navigate("/");
        } catch (error) {
            console.error("Sign-in error:", error);

            dispatch(
                signInFailure(error.response?.data?.message || "Sign-in failed")
            );
        }
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            {loading && <Loading />}

            <h1 className="text-lg sm:text-4xl text-center font-semibold my-10">
                Sign in
            </h1>

            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="email"
                    className="focus:outline-none border-2 p-3 rounded-lg"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    type="password"
                    placeholder="password"
                    className="focus:outline-none border-2 p-3 rounded-lg"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <input
                    type="button"
                    value="Sign In"
                    className="bg-slate-700 p-3 text-white rounded-lg shadow-md uppercase hover:opacity-90 disabled:opacity-80 cursor-pointer"
                    onClick={handleSignIn}
                />
            </form>

            <div className="font-bold mt-5 capitalize">
                <span>You don&apos;t have an account? </span>
                <Link to="/sign-up">
                    <span className="text-blue-800">Sign up</span>
                </Link>
            </div>

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
