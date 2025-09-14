import React from "react";
import PasswordInput from "../components/input/PasswordInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Card from "../components/card/Card";

const ResetPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center margin-auto bg-neutral-100">
      <Card>
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="h-7 w-20" />
        </div>
        <div className= "w-full flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl color-neutral-950">Reset your password</h1>
          <p className="text-center text-xs text-gray-500">Choose a new password to secure your account.</p>
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const newPassword = form["new-password"]?.value;
          const confirmNewPassword = form["confirm-new-password"]?.value;
          console.log({ newPassword, confirmNewPassword });
        }}>
          <PasswordInput id="new-password" label="New Password" helperText="At least 8 characters" />
          <PasswordInput id="confirm-new-password" label="Confirm New Password" />
          <PrimaryButton id="reset-password-button" type="submit">Reset Password</PrimaryButton>
        </form>
      </Card>
    </div>
  );
};

export default ResetPassword;
