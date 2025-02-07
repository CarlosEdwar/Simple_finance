import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [dados, setDados] = useState([]);

    const dataClick = () => {
        navigate('/data');
    };

    const buscarDados = () => {
        fetch('//Caminho para API')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                setDados(data);

                navigate('/toread', { state: { dados: data } }); 
            })
            .catch(error => console.error('Erro:', error));
    };

    return (
        <div className="bg-gradient-red-black w-screen h-screen flex items-center justify-center">
            <div className="bg-slate-200 w-96 h-96 p-5 flex flex-col justify-center items-center gap-6 rounded-md">
                <h1 className="justify-center mb-4 font-serif font-extrabold text-4xl">Acesse os Serviços</h1>
                <button
                    onClick={dataClick} 
                    className="bg-blue-950 text-white font-serif w-fit h-fit p-5 rounded-md">
                    Envio de dados
                </button>
                <button
                    onClick={buscarDados} 
                    className="bg-green-800 text-white font-serif w-fit h-fit p-5 rounded-md">
                    Visualização
                </button>
            </div>
        </div>
    );
}

export default Home;