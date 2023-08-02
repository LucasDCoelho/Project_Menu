interface FormProps{
  children: React.ReactNode
  title: string
  submit?: ()=> void
}

export function Form({ 
  children,
  title,
  submit
}: FormProps){
  return(
    <div className="bg-cyan-50 px-12 py-20 rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-2xl text-cyan-950">{title}</h2>
      <form onSubmit={submit}>
        <div className="mt-5">
          {children}
        </div>
      </form>
    </div>
  );
}