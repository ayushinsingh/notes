import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import PasswordInput from "../input/PasswordInput";

const ChangePassword: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const oldPassword = form["old-password"]?.value;
    const newPassword = form["new-password"]?.value;
    const confirmPassword = form["confirm-password"]?.value;

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    console.log({ oldPassword, newPassword, confirmPassword });
    // Add logic to handle password change, e.g., API call
  }

  return (
    <form className="p-8 flex flex-col gap-6 max-w-[75%]" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-lg bold-700">Change Password</h2>
      </div>
      <div className="flex flex-col gap-4">
        <PasswordInput id="old-password" label="Old Password" />
        <PasswordInput id="new-password" label="New Password" helperText="At least 8 characters" />
        <PasswordInput id="confirm-password" label="Confirm New Password" />
      </div>
      <div className="flex flex-row justify-end">
        <PrimaryButton type="submit" id="font-theme-apply-btn"> Save Password</PrimaryButton>
      </div>
    </form>
  );
};

export default ChangePassword;
