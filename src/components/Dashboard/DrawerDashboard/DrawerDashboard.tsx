"use client"
import { useAuth } from "@/hooks/useAuth";
import { Link } from "../../Link";

export function DrawerDashboard(){
  const { user } = useAuth()

  return(
    <div className="w-1/3 bg-cyan-600 h-full flex flex-col items-center py-4">
      <h1 className="text-cyan-50 font-bold text-2xl uppercase">Dashboard</h1>

      <Link.Root>
        <Link.Linked link={`/dashboard/${user?.id}`} content="Inicio" />
      </Link.Root>

      <Link.Root>
        <Link.Linked link={`/dashboard/${user?.id}/categorias`} content="Categorias" />
      </Link.Root>

      <Link.Root>
        <Link.Linked link={`/dashboard/${user?.id}/produtos`} content="Produtos" />
      </Link.Root>
    </div>
  )
}