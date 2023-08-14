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


export default function CategoriasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <div className="flex justify-between px-8 my-8">
        <h2 className="text-2xl">Categorias</h2>

        <Button
          text="Nova Categoria"
          type="button"
          className="bg-cyan-600 px-3 py-2 rounded text-cyan-50 hover:bg-cyan-500"
          click={() => { setIsModalOpen(!isModalOpen) }}
        />

        {isModalOpen ? (
          <div 
            className="w-full h-full fixed bg-cyan-600 top-0 left-0 bg-opacity-20"
            onClick={()=>{ setIsModalOpen(!isModalOpen) }}
          >
            <div
              className={`top-0 right-0 bg-cyan-700 fixed h-full w-1/5 p-6`}
            >
              <Button
                text="X"
                type="button"
                click={() => { setIsModalOpen(!isModalOpen) }}
                className="text-cyan-50 hover:bg-cyan-50 hover:rounded-full w-7 h-7 hover:text-cyan-700"
              />
              <div
                className="flex "
              >
                <h3>Hello World</h3>
              </div>
            </div>
          </div>

        ) : null}

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