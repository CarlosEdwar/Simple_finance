import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/home')

    }
    return(
        <div className="w-96 h-96 bg-slate-950 opacity-95 rounded-xl justify-center text-center  text-white space-y-3 ">
        <h1 className="justify-center text-left mt-10 ml-16 text-4xl font-serif">Login</h1>
        <form action="" method="post" className="text-black p-5 space-y-5">
         <input className="w-60 rounded-md h-10 outline-none" type="email" name="email" id="" placeholder="Usuario" required />
         <input className="w-60 rounded-md h-10 outline-none" type="password" name="senha" id="" placeholder="Senha" required />  
        </form>
        <button
         onClick={homeClick}
         className=" bg-red-700 w-60 h-10 rounded-md hover:bg-red-900">
            Entrar
        </button>
        <h2 className="font-serif">Não tem conta? <a className="underline hover:text-blue-500" target="_blank" href="/Forpages">Cadraste-se</a></h2>
  
      </div>
    )
};

export default Login;