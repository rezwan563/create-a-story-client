import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { emailLogin, googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')
    const [hidden, setHidden] = useState(true)

    const onSubmit = data => {
        emailLogin(data.email, data.password)
        .then(toast.success('Login successful'))
        .catch(err => setError(err.message))
        navigate(from)
    };
    const handleGoogleLogin = () =>{
        googleLogin()
        .then((r) =>{
            const loggedUser = r.user;
            const savedUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch('https://assignment-12-capture-a-story-server.vercel.app/users', {
                    method: "POST",
                    headers:{
                        'content-type' : 'application/json' 
                    },
                    body: JSON.stringify(savedUser)
                })
                .then(res =>res.json())
                .then(data =>{
                    toast.success('Login successful')
                })
            navigate(from)
        })
        .catch(err => console.error(err))
    }
  return (
    <div className="h-screen">
        <Helmet>
            <title>Login | CreateAStory</title>
        </Helmet>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm my-5 md:my-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Log in
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                {...register('email')}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type={hidden ? 'password' : 'text'}
                name="password"
                {...register('password')}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {
                error && <p>{error}</p>
              }
              {
                hidden ? <><IoEyeOffSharp onClick={() => setHidden(!hidden)}></IoEyeOffSharp></> : <><IoEyeSharp onClick={() => setHidden(!hidden)}></IoEyeSharp></>
              }
            </div>
            <div className=""></div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="w-full bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span className="flex justify-center items-center">
              <FcGoogle className="text-2xl"></FcGoogle> Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
