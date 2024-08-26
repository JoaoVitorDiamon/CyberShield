import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { clsx } from 'clsx'
import { brainwave } from "./assets";
import React, { useState } from 'react'
import { Eye, EyeSlash } from "@phosphor-icons/react";
import axios from "axios";

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
  username: zod.string().nonempty('Digite seu nome de usuario'),
  email: zod.string().email('Digite um e-mail válido'),
  senha: zod.string().nonempty('Digite a sua senha'),
})

type NewRegisterFormData = zod.infer<typeof loginFormValidationSchema>


const Register = () => {


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

  type NewRegisterFormData = zod.infer<typeof loginFormValidationSchema>

  const loginForm = useForm<NewRegisterFormData>({
    resolver: zodResolver(loginFormValidationSchema)
  })

  const { register, handleSubmit, formState, reset } = loginForm

  const { errors } = formState

  const handleLoginSubmit = (data: NewRegisterFormData) => {
    console.log(data)
    reset()
  }
  const headers = {};

if (process.env.NODE_ENV === 'development') {
  headers['ngrok-skip-browser-warning'] = 'true';
}

const handleRegisterSubmit = async (data:NewRegisterFormData) => {
  try {
    const url = `https://2ee7-189-29-146-118.ngrok-free.app/Users/cad/user=${data.username}&email=${data.email}&password=${data.senha}`;
    const response = await axios.get(url, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      },
    });
    console.log("Registro bem-sucedido:", response.data);
    window.location.href = '/login'
    reset();
  } catch (error) {
    console.error("Falha na requisição:", error);
  }
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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegisterSubmit)} >
              <div className="flex flex-col gap-2">
                <label
                  className="font-sans  font-semibold text-sm text-n-1"
                  htmlFor="username"
                >
                  Nome de usuario:
                </label>
                <input
                  className={clsx("px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-black outline-none focus:border-purple-900",{ 'border-red': errors.senha,
                    'focus:border-red-500' : errors.email,
                  })}
                  type="text"
                  id="username"
                  placeholder="Digite seu username"
                  {...register('username')}
                />
                 { errors.username  && (
                  <span className="text-red-500 text-sm"> {errors.username?.message} </span>)
                }
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-sans  font-semibold text-sm text-n-1"
                  htmlFor="E-mail"
                >
                  E-mail:
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
                  Senha:
        
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
                  Ja tem uma conta?
                  <a
                    className="text-purple-300 hover:text-purple-500 hover:underline ml-2"
                    href="/login"
                  >
                    Entre aqui
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

export default Register;
