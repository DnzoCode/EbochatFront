import React, { FormEventHandler, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const authStore = useAuthStore();
    const [login, setLogin] = useState({
        username: "" as string,
        password: "" as string
    })
    const navigate = useNavigate()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        try{
            authStore.login(login.username, login.password)
            navigate("/chat")
        }catch(error){

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center pt-12 md:pl-12 md:-mb-24 w-full" >
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              Ebochat
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Iniciar Sesion</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Username
                </label>
                <input
                  name="username"
                  id="username"
                  value={login.username}
                  onChange={handleChange}
                  placeholder="nombre de usuario"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Iniciar Sesion"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                No tienes cuenta?{" "}
                <a href="#" className="underline font-semibold">
                  Registrate aqui.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
          />
        </div>
      </div>
    </>
  );
}
