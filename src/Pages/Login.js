import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

function Login() {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider(auth);
  const SignInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        console.log(res)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-[#E66346] to-[#98508E]">
        <div className="content text-3xl text-center md:text-left">
          <Link to="/" className="text-6xl text-white font-bold">
            Olcha
          </Link>
          <p className="text-xl mt-[20px] font-semibold font-[cursive]">
            An Exciting place for the whole family to shop
          </p>
        </div>
        <div className="container mx-auto flex flex-col items-center">

          <form className="shadow-lg w-fit px-[40px] flex flex-col bg-white h-fit">
            <h1 className="text-center text-[30px] pt-[30px] ">
              Login or create an account
            </h1>
            <label htmlFor="phone_number" className="text-red-500 my-[15px] ">
              Phone Number
            </label>
            <input
              type="text"
              className="mb-3 py-3 px-4 border-2 border-red-500 focus:outline-none rounded-full"
            />
            <label htmlFor="password" className="text-red-500 my-[15px] ">
              Password
            </label>
            <input
              type="text"
              className="mb-3 py-3 px-4 border-2 border-red-500 focus:outline-none rounded-full"
            />
            <a href="email.com" className="text-right mb-5 mt-8">
              Forgot Password?
            </a>
            <button onClick={SignInwithGoogle} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign in with Google
            </button>
            <button className="w-full bg-gradient-to-r from-[#E66346] to-[#98508E] text-white p-3 rounded-full font-semibold text-lg">
              Login
            </button>

            <hr />
            <Link to="/register">
              <button className="w-full bg-white mt-4 mb-12 border border-black p-3 rounded-full font-semibold text-lg">
                Create an account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
