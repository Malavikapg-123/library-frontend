import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider';

function Login() {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("")

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Login Successfully!!!")
      navigate(from, { replace: true })
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

  // signup using google account
  const handleRegister = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;
      alert("Sign up successfully!!");
      navigate(from, { replace: true })
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleLogin} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="text"
                    className="peer h-10 w-full rounded border-b-2 border-gray-300 text-gray-900 focus:outline-none
                             focus:borer-rose-600" placeholder="Email address" />
                </div>
                <div class="relative">
                  <input id="password" name="password" type="password"
                    className="peer h-10 w-full rounded border-b-2 border-gray-300
                              text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                </div>

                {
                  error ? <p className='text-red-600 text-base'>Email or Password is not correct</p> : ""
                }

                <p>If you haven't an account. Please <Link to='/sign-up' className='text-blue-700 underline'>Sign up</Link> Here.</p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
                </div>
              </form>
            </div>

            <hr />
            <div className='flex w-full items-center flex-col mt-5 gap-3'>
              <button onClick={handleRegister} className='block'>
                <img src="http://andiamocreative.com/wp-content/uploads/2015/12/google.jpg" alt="" className='w-13 h-10 inline-block' />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login