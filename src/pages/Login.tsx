import {FormEvent, useState} from 'react';
import { api } from '../lib/axios';

export function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    async function submitData ( e : FormEvent){
        e.preventDefault();

        try {
            const response = await api.post('/login', {
              user: name,
              password: password,
            });
  
            const resposta = response.data;

            if(resposta){
                localStorage.setItem("token", resposta.token);
                window.location.reload();
            }
          
          } catch (err) {
            alert('Falha ao tentar se logar, verifique seus dados e tente novamente!');
          }

    }

    return (
        <div className="bg-[#da6523] font-open-sans h-screen flex">
            <section id="logo" className="w-1/2 flex justify-center">
                <img src="src/images/ball.gif" alt="animação" className="h-[600px]"/>
            </section>
            
            <section id="login" className="bg-purple-600 w-1/2 flex justify-center">
                <div className="bg-[#da6523] w-[400px] flex justify-center items-center rounded-[50px] border border-gray-400 mt-8 h-[600px]">
                    <p className="font-roboto-mono font-bold text-3xl px-5 text-purple-600">Login</p>
                    <form onSubmit={submitData}>
                        <div className="py-5">
                            <input type="text" onChange={e => setName(e.target.value)} placeholder="Usuario" className="text-white apperance-none block w-full py-3 px-4 leading-tight border-white bg-purple-600 rounded-md border focus:bg-purple-500 focus:border-white focus:outline-none"/>
                        </div>
                        <div className="py-5">
                            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" className="text-white apperance-none block w-full py-3 px-4 leading-tight border-white bg-purple-600 rounded-md border focus:bg-purple-500 focus:border-white focus:outline-none"/>
                        </div>
                        <div className="py-5">
                            <input type="submit" className="apperance-none cursor-pointer block w-full py-3 px-4 leading-tight bg-purple-600 text-white font-bold border-white rounded-md border"/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}