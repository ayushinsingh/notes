import React from "react";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center margin-auto bg-neutral-100">
      <div className="w-full shadow-lg flex justify-center flex-col bg-white p-4 sm:p-8 md:p-12 rounded-lg gap-[1rem] max-w-[343px] sm:max-w-[522px] md:max-w-[540px]">
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="h-7 w-20" />
        </div>
        <div className= "w-full flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl color-neutral-950">Reset your password</h1>
          <p className="text-center text-xs text-gray-500">Choose a new password to secure your account.</p>
        </div>
        <form className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="new-password" className="text-sm text-gray-700">New Password</label>
            <div className="inline-block w-full relative">
              <input type="password" id="new-password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <span className="absolute top-[25%] right-4"><img className="w-5 h-5" src="/Show.svg" /></span>
            </div>
            <div className="w-full flex flex-row items-center gap-1"><span><img className="w-4 h-4" src="/info circle.svg" /></span><p className="text-xs text-gray-500 text-center">At least 8 characters</p></div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="new-password" className="text-sm text-gray-700">Confirm New Password</label>
            <div className="inline-block w-full relative">
              <input type="password" id="new-password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <span className="absolute top-[25%] right-4"><img className="w-5 h-5" src="/Show.svg" /></span>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors py-2">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
