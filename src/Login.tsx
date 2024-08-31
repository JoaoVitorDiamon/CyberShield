import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { clsx } from "clsx";
import { brainwave } from "./assets";
import React, { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import axios from "axios";

type PasswordType = "password" | "text";

const loginFormValidationSchema = zod.object({
  email: zod.string().email("Digite um e-mail válido"),
  senha: zod.string().nonempty("Digite a sua senha"),
});

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>;

const Login = () => {
  const [inputPasswordType, setInputPasswordType] = useState<PasswordType>("password");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTogglePasswordType = (type: PasswordType) => {
    setInputPasswordType(type === "password" ? "text" : "password");
  };

  const loginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
  });

  const { register, handleSubmit, formState, reset } = loginForm;
  const { errors } = formState;

  const handleLoginSubmit = async (data: NewLoginFormData) => {
    try {
      const url = `https://9fb7-189-29-146-118.ngrok-free.app/Users/login/email=${data.email}&&password=${data.senha}`;
      const response = await axios.get(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        },
      });
      
      if (response.data === 'Email ou senha incorretos') {
        setErrorMessage("Email ou senha incorretos");
        reset();
      } else {
        const { token, username, Id } = response.data;
        localStorage.setItem('sessionToken', token);
        localStorage.setItem('username', username);
        localStorage.setItem('Id', Id);
        window.location.href = '/';
      }
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
      console.error("Falha na requisição:", error);
    }
    reset();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-n-8">
      <div className="flex flex-col justify-center px-4 md:px-20 py-10">
        <img src={brainwave} width={190} height={40} alt="CyberShield" />
        <main className="flex flex-col gap-6 w-full max-w-md mx-auto">
          <header className="flex flex-col gap-4 w-full">
            <h1 className="font-sans font-extrabold text-2xl md:text-4xl text-n-1">
              Acesse nosso jogo
            </h1>
            <p className="font-sans font-normal text-sm md:text-base text-n-2">
              Faça login ou registre-se para começar a jogar
            </p>
          </header>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLoginSubmit)}>
            {errorMessage && (
              <div className="bg-red-100 text-red-500 border border-red-300 p-4 rounded mb-4">
                {errorMessage}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label className="font-sans font-semibold text-sm text-n-1" htmlFor="email">
                E-mail
              </label>
              <input
                className={clsx(
                  "px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-black outline-none focus:border-purple-900",
                  {
                    "border-red-500": errors.email,
                    "focus:border-red-500": errors.email,
                  }
                )}
                type="text"
                id="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email?.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="flex font-sans justify-between font-semibold text-sm text-n-1" htmlFor="senha">
                Senha
                <a className="text-purple-300 hover:text-purple-500 hover:underline" href="#">
                  Esqueceu sua senha?
                </a>
              </label>
              <input
                className={clsx(
                  "px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded placeholder:text-black outline-none focus:border-purple-900",
                  {
                    "border-red-500": errors.senha,
                    "focus:border-red-500": errors.senha,
                  }
                )}
                type={inputPasswordType}
                id="senha"
                placeholder="Digite sua senha"
                {...register("senha")}
              />
              <button
                className="absolute right-4 top-11 text-gray-400"
                type="button"
                onClick={() => handleTogglePasswordType(inputPasswordType)}
              >
                {inputPasswordType === "password" ? <EyeSlash /> : <Eye />}
              </button>
              {errors.senha && (
                <span className="text-red-500 text-sm">{errors.senha?.message}</span>
              )}
            </div>
            <footer className="flex flex-col gap-6">
              <button className="bg-purple-950 text-white font-sans font-bold py-3 rounded hover:bg-purple-900 hover:ring-2 hover:ring-purple-900 focus:ring-2 focus:ring-purple-900">
                Entrar
              </button>
              <span className="text-n-1">
                Ainda não tem uma conta?
                <a className="text-purple-300 hover:text-purple-500 hover:underline ml-2" href="/register">
                  Inscreva-se
                </a>
              </span>
            </footer>
          </form>
        </main>
      </div>
      <div className="hidden md:block bg-img-purple bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Login;