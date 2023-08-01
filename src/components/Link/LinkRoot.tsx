export function LinkRoot({ 
  children 
}:{
  children: React.ReactNode
}){
  return(
    <div className="flex justify-end">
      {children}
    </div>
  );
}