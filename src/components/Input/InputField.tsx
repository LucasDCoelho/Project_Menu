import { ChangeEventHandler } from "react";

interface InputFieldProps{
  security?: "password" | "email" | "text"
  placeholder: string
  change?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
}

export function InputField({
  placeholder,
  security,
  value,
  change
}: InputFieldProps){
  return(
    <input
      className="shadow shadow-cyan-200 outline outline-1 outline-cyan-500 rounded focus:outline-cyan-800 focus:outline-2 mb-3 py-1 px-2 placeholder:text-sm"
      placeholder={placeholder}
      type={security}
      value={value}
      onChange={change}
      required
    />
  );
}