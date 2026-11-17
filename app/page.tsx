"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"
import Link from "next/link"


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
    <main className="min-h-screen bg-green-50">


<div className="min-h-screen flex items-center justify-center p-8">

  <div className="w-full max-w-md bg-white border border-green-100 shadow-lg rounded-2xl p-8">

    
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-green-800">
        🌿 Bem-vindo ao VerdeScanner!
      </h1>

      <p className="text-gray-500 mt-2 text-sm">
        Sua estufa, sob controle.
      </p>
    </div>

    <form className="flex flex-col gap-5">

      <div>
        
        <label className="block text-sm font-medium mb-2">Usuario</label>

        <input 
        type="text"
        placeholder="Digite seu nome de usuario"
        value={usuario}
        onChange={(e)=>setUsuario(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          E-mail
        </label>

        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Senha
        </label>

        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <button
        type="submit"
        onClick={Entrar}
        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Entrar
      </button>

    </form>

    <p className="text-center text-sm text-gray-500 mt-6">
      Não tem uma conta? {""}

      <Link
      href="/cadastro"
            className="text-green-700 font-semibold hover:underline"
      >Cadastrar</Link>
    </p>

  </div>
</div>


    </main>
  )
}
