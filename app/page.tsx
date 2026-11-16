"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"
import Image from 'next/image';


export default function loginUsuario() {

  const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

  async function Entrar() {
    if(usuario !== "" && email !== "" && senha !== ""){
      localStorage.setItem("usuario_logado", "true")

    await Swal.fire({
      title: "Login efetuado com sucesso!",
      icon:"success",
      confirmButtonText:"Ok"
    })

    router.push("/dashboard")
    return
  }else{
    await Swal.fire({
      title:"Falha ao logar!",
      icon:"error",
      confirmButtonText:"Ok"
    })
  }
}
  return (
    <main className="flex min-h-screen bg-green-50">
      <div className="w-1/2 p-4 bg-green-50">
        <h1 className="text-4xl font-bold text-green-700">🌿VerdeScanner</h1>
      </div>
      <div className="w-1/2 rounded-2xl bg-green-100 shadow-md p-8">
        <h1>
          🌱
        </h1>

        <h1 className="font-bold text-3xl text-black ">
        Sua estufa, sob controle.
        </h1>

        <p className="text-sm text-gray-600">
          Acompanhe as condições ambientais e cuide melhor
          das suas plantas.
        </p>

        <Image
        src="/estufa.jpeg"
        alt="Estufa"
        width={800}
        height={600}
        className="w-full h-135 rounded-2xl border-black border-3"
        />
      </div>

     <div className="bg-white w-1/2 flex flex-col p-8">
        <h1 className="text-3xl font-bold">
          Bem-vindo!
        </h1>

        <p className="mt-4">
          Entre na sua conta do VerdeScanner.
        </p>
      </div>
    </main>
  )
}
