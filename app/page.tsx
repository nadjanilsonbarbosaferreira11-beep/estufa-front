"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"


export default function loginUsuario() {

  const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

  async function Entrar() {
    if(usuario.trim() === "") {
      await Swal.fire({
        title: "informe seu nome de usuário",
        icon: "warning"
      })
      return
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      await Swal.fire({
        title:"Email inválido",
        icon:"warning"
      })
      return
    }

    if(senha.length < 6){
      await Swal.fire({
        title:"Senha inválida",
        text:"sua senha deve conter no minímo 6 caracteres.",
        icon:"warning"
      })
      return
    }

     await Swal.fire({
    title: "Login efetuado com sucesso!",
    icon: "success",
    confirmButtonText: "Ok"
  })

  router.push("/dashboard")

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
        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          E-mail
        </label>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Senha
        </label>

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <button
        type="button"
        onClick={Entrar}
        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Entrar
      </button>

    </form>
  </div>
</div>
 </main>
  )
}
