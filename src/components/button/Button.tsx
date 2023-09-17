import React from "react";
import clsx from "clsx";

type IButton = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

const Button: React.FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button
      className={clsx(
        "cursor-pointer rounded-md border-2 border-indigo-800 bg-indigo-700 p-2 font-semibold text-white",
        className ? className : false
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
