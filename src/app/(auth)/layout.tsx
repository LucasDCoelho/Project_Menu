interface AuthLayoutProps{
  children: React.ReactNode 
}

export default function AuthLayout({ children }: AuthLayoutProps){
  return(
    <div className="lg:w-1/2 bg-cyan-600 h-full flex justify-center items-center md:w-full sm: w-full">
      {children}
    </div>
  );
}