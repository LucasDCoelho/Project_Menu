"use client"
import { useAuth } from "@/hooks/useAuth";


import { Avatar } from "@/components/Avatar/Avatar";
import { Button } from "@/components/Button";

export function HeaderDashboard() {
  const { user, logOut } = useAuth();

  return (
    <header className="flex items-start justify-end py-4 px-8 w-full">
      <div className='flex items-center gap-2'>
        <div className="flex flex-col items-end">
          {user ? (
            <h2 className='text-sm font-bold'>
              {user?.name ? user.name : 'Nome de usuário não encontrado'}
            </h2>
          ) : (
            <span>Loading user data...</span>
          )}
          <Button
            type="button"
            text={"Sair"}
            click={logOut}
            className='text-xs font-semibold'
          />
        </div>
        <div>
          <Avatar
            src={user?.avatar as string}
            alt={`Imagem de perfil do ${user?.name}`}
            width={50}
            height={50}
            className="rounded-full outline outline-cyan-500"
          />
        </div>
      </div>
    </header>
  )
}