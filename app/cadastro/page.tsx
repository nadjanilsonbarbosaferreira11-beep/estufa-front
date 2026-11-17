"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"
import Link from "next/link"

export default function Cadastro() {

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
    
        router.push("/")
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
    <main className="min-h-screen bg-green-50 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-green-800 text-center">
          🌿 Criar conta
        </h1>

        <p className="text-gray-500 text-center text-sm mt-2 mb-8">
          Cadastre-se no VerdeScanner
        </p>

        <form className="flex flex-col gap-4">

          <div>
            <label className="text-sm font-medium">
              Nome
            </label>

            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              required
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              E-mail
            </label>

            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Senha
            </label>

            <input
              type="password"
              name="senha"
              placeholder="Crie uma senha"
              minLength={8}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Criar conta
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Já possui uma conta? {" "}
          <Link
            href="/"
            className="text-green-700 font-semibold hover:underline"
          >
            Fazer login
          </Link>
        </p>

      </div>
    </main>
  );
}
