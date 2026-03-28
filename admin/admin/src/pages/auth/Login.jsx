import { useEffect, useState } from "react";
import axios from "axios"
export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleForm = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1000/api/admin/login",{email,password});
      console.log(res);

    } catch (error) {
      console.log(error);
    }
    // console.log(email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-green-400 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-8">
          <div className="text-center">
            <img
              src="logophoto.png"
              alt="login illustration"
              className="w-72 mx-auto"
            />
            <h2 className="mt-6 text-xl font-semibold text-gray-700">
              Secure Login
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Access your dashboard safely and quickly
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-2 mb-2">
              {/* <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span> */}
              <img src="logo.png" className="w-[150px]" alt="" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Login as Admin User
            </h1>
          </div>

          <form className="space-y-5" onSubmit={(e)=>handleForm(e)}>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              LOGIN
            </button>
          </form>

           

          <div className="text-center mt-8 text-xs text-gray-400">
            Terms of use. Privacy policy
          </div>
        </div>
      </div>
    </div>
  );
}
