interface InputFieldProps{
  toggleClick: () => void;
}

export function InputVisibleBtn({
  toggleClick
}: InputFieldProps){

  return(
    <div
      className="absolute bg-cyan-800 w-5 h-5 bottom-[1.1rem] right-2 cursor-pointer"
      onClick={toggleClick}
      >
        
    </div>
  );
}