import React from "react";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center margin-auto bg-neutral-100">
      <div className="w-full shadow-lg flex justify-center flex-col bg-white p-4 sm:p-8 md:p-12 rounded-lg gap-[1rem] max-w-[343px] sm:max-w-[522px] md:max-w-[540px]">
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="h-7 w-20" />
        </div>
        <div className= "w-full flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl color-neutral-950">Forgotten your password?</h1>
          <p className="text-center text-xs text-gray-500">Enter your email below, and we'll send you a link to reset it.</p>
        </div>
        <form className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input type="email" id="email" placeholder="email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors py-2">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
