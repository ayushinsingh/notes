import React from "react";

interface PasswordInputProps {
  id: string;
  label: string;
  helperText?: string;
  forgotPasswordLink?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full flex justify-between items-center">
        <label htmlFor="password" className="text-sm text-gray-700">
          {props.label}
        </label>
        {props.forgotPasswordLink && (
          <a
            href={props.forgotPasswordLink}
            className="text-xs text-gray-500 underline"
          >
            Forgot
          </a>
        )}
      </div>
      <div className="inline-block w-full relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute top-[25%] right-4">
          <img
            className="w-5 h-5"
            src={showPassword ? "/Hide.svg" : "/Show.svg"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          />
        </span>
      </div>
      {props.helperText && (
        <div className="w-full flex flex-row items-center gap-1">
          <span>
            <img className="w-4 h-4" src="/info circle.svg" />
          </span>
          <p className="text-xs text-gray-500 text-center">
            {props.helperText}
          </p>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
