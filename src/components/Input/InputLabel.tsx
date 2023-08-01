interface InputLabelProps{
  text: string
}

export function InputLabel({ text }: InputLabelProps){
  return(
    <label className="text-cyan-950 text-sm">{text}</label>
  );
}