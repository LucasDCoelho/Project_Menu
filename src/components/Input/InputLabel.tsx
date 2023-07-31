interface InputLabelProps{
  text: string
}

export function InputLabel({ text }: InputLabelProps){
  return(
    <label>{text}</label>
  );
}