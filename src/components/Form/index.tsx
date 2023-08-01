interface FormProps{
  children: React.ReactNode
  title: string
}

export function Form({ 
  children,
  title 
}: FormProps){
  return(
    <div className="bg-cyan-50 px-12 py-20 rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-2xl text-cyan-950">{title}</h2>
      <form>
        <div className="mt-5">
          {children}
        </div>
      </form>
    </div>
  );
}