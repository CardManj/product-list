import { ButtonHTMLAttributes } from "react";

export enum ButtonVariant {
  Active = "active",
  Inactive = "inactive",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const buttonStyles = {
  [ButtonVariant.Active]:
    "flex items-center justify-center border rounded-3xl w-30 h-fit px-12 py-2 bg-MentorRed text-white font-semibold border-MentorRed text-xs",
  [ButtonVariant.Inactive]:
    "flex items-center justify-center border rounded-3xl w-30 h-fit px-3 py-2 border-MentorRed bg-white text-xs hover:text-MentorRed",
};

export function Button({
  children,
  type = "button",
  variant = ButtonVariant.Inactive,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles[variant]} transition duration-300 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
