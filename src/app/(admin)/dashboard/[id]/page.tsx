"use client";

import React from 'react';

// Import and verify the implementation of useAuth hook
import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/Button";


export default function DashboardLogadoPage() {
  const { user, signOut } = useAuth();
  
  return (
    <div className="flex items-center justify-around py-4">
      <div className="flex flex-col ">
        <h1>Dashboard</h1>
        {user ? (
          <div className="flex items-center justify-center gap-4">
            {user?.name ? user.name : 'Nome de usuário não encontrado'}
          </div>
        ) : (
          <div>Loading user data...</div>
        )}
      </div>

      <Button
        type="button"
        text={"Sair"}
        click={signOut}
      />
    </div>
  );
}