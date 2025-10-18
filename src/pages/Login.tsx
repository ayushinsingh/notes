import React from "react";
import PasswordInput from "../components/input/PasswordInput";
import Input from "../components/input/Input";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Card from "../components/card/Card";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center margin-auto bg-neutral-100 dark:bg-neutral-700">
      <Card>
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="block dark:hidden h-7 w-20" />
          <img src="dark/logo.svg" alt="Logo" className="hidden dark:block h-7 w-20" />
        </div>
        <div className= "w-full flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl">Welcome to Note</h1>
          <p className="text-center text-xs text-gray-500 dark:text-neutral-300">Please log in to continue</p>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = form.email?.value;
            const password = form.password?.value;
            console.log({ email, password });
          }}
        >
          <Input id="email" label="Email" type="email" placeholder="email@example.com" />
          <PasswordInput id="password" label="Password" forgotPasswordLink="/forgot-password" />
          <PrimaryButton id="login-button" type="submit">Login</PrimaryButton>
        </form>
        <div className="w-full flex flex-col gap-4">
          <hr className="flex-grow border-gray-200"/>
          <p className="text-center text-gray-400 text-xs">Or log in with:</p>
          <SecondaryButton id="login-with-google-button">
            <img src="/Google.svg" alt="Google Logo" className="block dark:hidden h-6 w-6"/>
            <img src="dark/Google.svg" alt="Google Logo" className="hidden dark:block h-5 w-5"/>
            Google
          </SecondaryButton>
        </div>
        <hr className="flex-grow border-gray-200"/>
        <div className="w-full flex justify-center items-center gap-1">
          <span className="text-xs text-gray-500 dark:text-neutral-300">No account yet?</span>
          <a href="/signup" className="text-xs hover:underline">Sign up</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
