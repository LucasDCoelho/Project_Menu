"use client"
import { useState } from "react";


import { Button } from "@/components/Button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SideBar } from "@/components/SideBar/SideBar";



export default function CategoriasPage() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);


  return (
    <>
      <div className="flex justify-between px-8 my-8">
        <h2 className="text-2xl">Categorias</h2>

        <Button
          text="Nova Categoria"
          type="button"
          className="bg-cyan-600 px-3 py-2 rounded text-cyan-50 hover:bg-cyan-500"
          click={()=>{ setIsModalOpen(isModalOpen) }}
        />

        {isModalOpen ? (
          <SideBar/>
        ): null}
    
      </div>
      <Table className="px-10">
        <TableCaption>Lista de categorias</TableCaption>
        <TableHeader >
          <TableRow >
            <TableHead>Categoria</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Condimentos</TableCell>
            <TableCell>Faltando</TableCell>
            <TableCell className="text-center">Check | Denied</TableCell>
          </TableRow>
        </TableBody>
      </Table>






    </>
  );
}