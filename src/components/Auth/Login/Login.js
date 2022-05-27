import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithGoogle, userOne] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, ResetPassError] =
    useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(email);
    toast("Email Send");
  };

  if (user || userOne) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" w-11/12 md:w-1/3 mx-auto border-2 my-5 p-10 rounded-xl font-serif">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Please Login...
        </h1>
        <div className="my-3">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            onBlur={handleEmail}
            className="btn text-xl p-2 border w-full"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="my-3">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            onBlur={handlePassword}
            className="btn text-2xl border w-full p-2"
            type="password"
            name="password"
            required
          />
        </div>

        {(loading || sending) && <Loading></Loading>}

        {(error || ResetPassError) && (
          <p className="text-red-600">
            Error: {error?.message} {ResetPassError?.message}
          </p>
        )}

        <div className="flex justify-center my-3">
          <input
            className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
            type="submit"
            value="Login"
          />
        </div>
      </form>

      <p className="text-xl text-center">
        First time?
        <Link
          className="text-blue-500 hover:text-orange-600 ml-3"
          to="/register"
        >
          Create account
        </Link>
      </p>
      <p className="text-xl text-center mt-3">
        forget password?
        <span
          onClick={handleResetPassword}
          className="text-blue-500 hover:text-orange-600 ml-3 cursor-pointer"
        >
          reset password
        </span>
      </p>
      <div className="text-2xl text-center mt-3 bg-slate-400 hover:bg-slate-500  font-bold px-5 py-2 text-white rounded-xl ">
        <button onClick={() => signInWithGoogle()}>SignIn with Google</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
