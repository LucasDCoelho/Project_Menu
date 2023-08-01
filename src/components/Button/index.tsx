import React from "react";

interface ButtonProps{
  text: string
  type: "button" | "reset" | "submit"
}


export function Button({
  text,
  type
}: ButtonProps){
  return(
    <>
      <button 
        type={type} 
        className="text-cyan-50 bg-cyan-500 w-full mt-4 py-1 rounded-sm font-semibold"
      >
        {text}
      </button>
    </>
  );
}