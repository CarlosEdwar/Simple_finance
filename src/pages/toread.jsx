import { House } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function Toread() {
    const location = useLocation();
    const dados = location.state?.dados || [];

    const navigate = useNavigate()
    const homeClick = () => {
        navigate('/home')
    }
    return(
        <div className="bg-gradient-red-black w-screen h-screen flex items-center justify-center">
            <div className="bg-slate-200 w-2/4 h-96 space-y-3 overflow-x-auto">
                <header className="flex justify-center text-center font-serif text-2xl mt-8">Dados Recebidos</header>
                <table className=" items-center text-center min-w-full divide-y divide-gray-400 flex">
                
                    <tbody className="divide-y divide-gray-900 font-mono">
                        {dados.map((linha, index) => (
                            <tr key={index}>
                                {linha.map((celula, i) => (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" key={i}>{celula}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={homeClick} title="INICIO" className="border-2 border-black p-1 rounded-md flex ml-5">
                <House/>
            </button>
            </div>
            
        </div>
    )
}

export default Toread;