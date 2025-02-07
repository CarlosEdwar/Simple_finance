import { House } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Data() {
  const navigate = useNavigate();

  async function enviarDadosParaAPI(e) {
    e.preventDefault(); 
    
    const formData = new FormData(e.target);
    const dados = {
      data: formData.get('data'),
      vE: formData.get('vE'),
      vP: formData.get('vP'),
      vC: formData.get('vC'),
    };

    
    if (!dados.data || !dados.vE || !dados.vP || !dados.vC) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    try {
      const response = await fetch('//Caminho da API', {
        method: 'POST',
        body: new URLSearchParams(dados), 
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados para a API');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'dados_formulario.csv'); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  const starClick = (e) => {
    e.preventDefault(); 
    navigate('/home'); 
  };

  return (
    <div className="bg-gradient-red-black flex justify-center items-center w-screen h-screen">
      <div className="bg-slate-200 p-2 text-center">
        <h1 className="justify-center ml-8 flex text-xl w-80 border-black border-2 rounded-sm font-serif mt-8">
          INFORMAÇÕES PARA ENVIO
        </h1>
        <form
          className="w-96 h-96 rounded-md p-10 space-y-5"
          onSubmit={enviarDadosParaAPI}
        >
          <input
            className="w-80 rounded-md h-9 p-5 outline-none text-black font-serif"
            type="month"
            name="data"
            id="data"
            placeholder="Data"
          />
          <input
            className="w-80 rounded-md h-9 p-5 outline-none text-black font-serif"
            type="number"
            name="vE"
            id="vE"
            placeholder="Valores em espécie"
          />
          <input
            className="w-80 rounded-md h-9 p-5 outline-none text-black font-serif"
            type="number"
            name="vP"
            id="vP"
            placeholder="Valores no Pix"
          />
          <input
            className="w-80 rounded-md h-9 p-5 outline-none text-black font-serif"
            type="number"
            name="vC"
            id="vC"
            placeholder="Valores no Cartão"
          />
          <input
            className="w-60 rounded-md cursor-pointer hover:bg-blue-600 h-9 bg-blue-400 text-black font-serif"
            type="submit"
            value="Enviar"
          />
          <button
            onClick={starClick}
            title="INICIO"
            className="border-2 border-black p-1 rounded-md flex justify-center text-center"
          >
            <House />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Data;