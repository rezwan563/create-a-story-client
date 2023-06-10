import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [confirmError, setConfirmError] = useState('')
    const [error, setError] = useState('')
    const { createUser, profileUpdate} = useContext(AuthContext)

    const onSubmit = data => {
        const confirm = data.confirm;
        const password = data.password;
        if(password !== confirm){
            setConfirmError('Password did not match')
            return
        }
        createUser(data.email, data.password)
        .then(() =>{
            profileUpdate(data.name, data.photo)
            .then(() =>{
               const savedUser = {name: data.name, email: data.email}
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers:{
                        'content-type' : 'application/json' 
                    },
                    body: JSON.stringify(savedUser)
                })
                .then(res =>res.json())
                .then(data =>{
                    toast.success('Profile Created')
                })
            })
            .catch(error =>{
                console.log(error.message)
            })
        })
        .catch((error) =>{
            setError(`${error.message}`)
            toast.warning(`${error.message}`)
        })

        

        };
  return (
    <div className="h-screen">
        <Helmet>
            <title>Register | CreateAStory</title>
        </Helmet>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm p-4 my-5 md:my-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up 
            </h5>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="text"
                {...register('name', {required: true})}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="ex. John"
                required
              />
            </div>
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
                {...register('email', {required: true})}
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
                type="password"
                name="password"
                {...register('password', {required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()-=_+]).{6,}/} )}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {errors.password?.type === 'minLength' && <p><small>Password must be  at least 6 characters</small></p>}
              {errors.password?.type === 'pattern' && <p><small>Password must be  at least 6 characters, contains at least one capital letter, and has at least one special character.</small></p>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm"
                {...register('confirm', {required: true})}
                id="confirm"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {
                confirmError && <p><small>{confirmError}</small></p>
              }
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Photo url
              </label>
              <input
                type="url"
                name="photo"
                {...register('photo', {required: true})}
                id="photo"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className=""></div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
