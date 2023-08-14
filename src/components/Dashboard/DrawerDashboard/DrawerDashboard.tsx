"use client"
import { useAuth } from "@/hooks/useAuth";
import { Link } from "../../Link";

export function DrawerDashboard() {
  const { user } = useAuth()

  return (
    <div className="w-1/4 bg-cyan-600 h-full flex flex-col py-4">
      <h1 className="text-cyan-50 font-bold text-2xl uppercase px-8">Dashboard</h1>

      <div className="flex flex-col items-start px-8 py-10 gap-4 text-cyan-50">
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

    </div>
  )
}