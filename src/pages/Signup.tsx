import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center margin-auto bg-neutral-100">
      <div className="w-full shadow-lg flex justify-center flex-col bg-white p-4 sm:p-8 md:p-12 rounded-lg gap-[1rem] max-w-[343px] sm:max-w-[522px] md:max-w-[540px]">
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="h-7 w-20" />
        </div>
        <div className= "w-full flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl color-neutral-950">Create Your Account</h1>
          <p className="text-center text-xs text-gray-500">Signup to start organizing your notes and boost your productivity.</p>
        </div>
        <form className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input type="email" id="email" placeholder="email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-700">Password</label>
            <div className="inline-block w-full relative">
              <input type="password" id="new-password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <span className="absolute top-[25%] right-4"><img className="w-5 h-5" src="/Show.svg" /></span>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors py-2">Login</button>
        </form>
        <div className="w-full flex flex-col gap-4">
          <hr className="flex-grow border-gray-200"/>
          <p className="text-center text-gray-400 text-xs">Or log in with:</p>
          <button className="w-full border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors py-2 flex items-center gap-2 justify-center">
            <img src="/Vector.svg" alt="Google Logo" className="h-5 w-5 "/>
            Google
          </button>
        </div>
        <hr className="flex-grow border-gray-200"/>
        <div className="w-full flex justify-center items-center gap-1">
          <span className="text-xs text-gray-500">Already have an account?</span>
          <a href="/login" className="text-xs hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
