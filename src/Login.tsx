import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { clsx } from 'clsx'
import { brainwave } from "./assets";
import React, { useState } from 'react'
import { Eye, EyeSlash } from "@phosphor-icons/react";

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
  email: zod.string().email('Digite um e-mail válido'),
  senha: zod.string().nonempty('Digite a sua senha')
})

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>


const Login = () => {
  
  const [
    inputPasswordType, 
    setInputPasswordType
  ] = useState<PasswordType>('password')

  const handleTogglePasswordType = ( type:PasswordType ) => {
    switch ( type ) {
      case 'password':
        setInputPasswordType('text')
        return
      case 'text':
      default:
        setInputPasswordType('password')
        return
    }
  }

  type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

  const loginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema)
  })

  const { register, handleSubmit, formState, reset } = loginForm

  const { errors } = formState

  const handleLoginSubmit = (data: NewLoginFormData) => {
    console.log(data)
    reset()
  }

  return (
    <div className="grid grid-cols-2 h-screen bg-n-8">
      <div>
        <div className="py-10 px-20">
          <img src={brainwave} width={190} height={40} alt="CyberShield" />
          <main className="flex flex-col gap-10 w-full max-w-[384px]:">
            <header className="flex flex-col gap-4 w-full max-w-[400px]">
              <h1 className="font-sans font-extrabold text-4xl text-n-1">
                Acesse nosso jogo
              </h1>
              <p className="font-sans font-normal text-base text-n-2">
                Faca login ou registre-se para comecar a jogar
              </p>
            </header>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLoginSubmit)}>
              <div className="flex flex-col gap-2">
                <label
                  className="font-sans  font-semibold text-sm text-n-1"
                  htmlFor="E-mail"
                >
                  E-mail
                </label>
                <input
                  className={clsx("px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-black outline-none focus:border-purple-900",{ 'border-red': errors.senha,
                    'focus:border-red-500' : errors.email,
                  })}
                  type="text"
                  id="email"
                  placeholder="Digite seu e-mail"
                  {...register('email')}
                />
                 { errors.email  && (
                  <span className="text-red-500 text-sm"> {errors.email?.message} </span>)
                }
              </div>
              <div className="flex  flex-col gap-2 relative">
                <label
                  className="flex font-sans justify-between font-semibold text-sm text-n-1"
                  htmlFor="Senha"
                >
                  Senha
                  <a
                    className="text-purple-300 hover:text-purple-500 hover:underline"
                    href="#"
                  >
                    Esqueceu sua senha?
                  </a>
                </label>
                <input
                  className={clsx("px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-black outline-none focus:border-purple-900",  { 'border-red': errors.email,
                    'focus:border-red-500' : errors.senha,})}
                  type= {inputPasswordType}
                  id="senha"
                  placeholder="Digite sua senha"
                  {...register('senha')}
                />
                <button
                  className="absolute right-4 top-11 text-gray-400"
                  type='button'
                  onClick={() => handleTogglePasswordType(inputPasswordType)}
                >
                  { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                </button>
                { errors.senha  && (
                  <span className="text-red-500 text-sm"> {errors.senha?.message} </span>)
                }
              </div>
              <footer className="flex flex-col gap-8 ">
                <button className="bg-purple-950 text-white font-sans font-bold py-4   rounded  hover:bg-purple-950 hover:ring-2 hover:ring-purple-900 focus:ring-2 focus:ring-purple-900">
                  Entrar
                </button>
                <span className="text-n-1 ">
                  Ainda nao tem uma conta?
                  <a
                    className="text-purple-300 hover:text-purple-500 hover:underline ml-2"
                    href="/register"
                  >
                    Inscreva-se
                  </a>
                </span>
              </footer>
            </form>
          </main>
        </div>
      </div>
      <div className="bg-img-purple bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Login;
