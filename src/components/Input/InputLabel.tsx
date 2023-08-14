interface InputLabelProps{
  text: string
  className: string
}

export function InputLabel({ text, className }: InputLabelProps){
  return(
    <label className={className}>{text}</label>
  );
}