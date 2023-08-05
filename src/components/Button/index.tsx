import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
  type: "button" | "reset" | "submit"
  click?: ()=> void
  disabled?: boolean;
}


export function Button({
  text,
  type,
  click,
  ...rest
}: ButtonProps){

  console.log(click)
  return(
    <>
      <button
        {...rest}
        type={type} 
        className={`text-cyan-50 bg-cyan-500 w-full mt-4 py-1 rounded-sm font-semibold`}
        onClick={click}
      >
        {text}
      </button>
    </>
  );
}