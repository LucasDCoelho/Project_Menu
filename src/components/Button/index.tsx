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
        onClick={click}
      >
        {text}
      </button>
    </>
  );
}