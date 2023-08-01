interface AuthLayoutProps{
  children: React.ReactNode 
}


export default function AuthLayout({ children }: AuthLayoutProps){
  return(
    <div className="w-1/2 bg-cyan-600 h-full flex justify-center items-center">
      {children}
    </div>
  );
}