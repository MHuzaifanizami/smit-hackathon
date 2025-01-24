import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // console.log("data", data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            alert("Password and Confirm Password should be same");
            return;
        }

        try {
            const response = await axios.post("https:smit-hackathon-backend.vercel.app/api/v1/signup", data,);
            console.log("response", response);
            alert("User created successfully");
            navigate("/login");
        } catch (error) {

            alert(error?.response?.data?.message || error?.message || "An error occurred");
            console.log("Error during signup:", error?.response?.data?.message);
            // alert("An error occurred incatxh");
        }
    }



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Create Your Account
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            placeholder="Enter your name"
                            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            value={data.confirmPassword}
                            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button

                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;
