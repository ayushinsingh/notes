import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Input from "../components/input/Input";
import Card from "../components/card/Card";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center margin-auto bg-neutral-100">
      <Card>
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="h-7 w-20" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl color-neutral-950">
            Forgotten your password?
          </h1>
          <p className="text-center text-xs text-gray-500">
            Enter your email below, and we'll send you a link to reset it.
          </p>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = form.email?.value;
            console.log({ email });
          }}
        >
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="email@example.com"
          />
          <PrimaryButton id="send-reset-link-button" type="submit">
            Send Reset Link
          </PrimaryButton>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
