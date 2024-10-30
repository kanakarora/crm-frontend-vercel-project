import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src="./images/Flowchangers.ai 4.png" alt="Flowchangers Logo" className="bg-black"/>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center mb-4 hover:bg-gray-50 transition duration-300">
            <img src="./images/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2"/>
            Log In with Google
          </button>
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <div className="text-center text-gray-500 px-4 py-2 border-gray-300">
              or Log in with Email
            </div>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                aria-label="Password"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 px-4 hover:bg-purple-500 transition duration-300 rounded-full"
            >
              Log in
            </button>
          </form>
          <div className="text-center mt-4 flex flex-col justify-center gap-y-3">
            <a href="#" className="text-purple-600 hover:text-purple-500">
              <span className="text-gray-400">Forgot password?</span> 
              <button >Reset</button>
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-500">
              <span className="text-gray-400">Don't have an account?</span> 
              <button onClick={nextStep}>Sign up</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
