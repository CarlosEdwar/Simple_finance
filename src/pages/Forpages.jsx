import { useState } from 'react';

function ForPages() {
    const [mensagem, setMensagem] = useState(null); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target); 

        try {
            const response = await fetch('//Caminho da APi', {
                method: 'POST',
                body: formData, 
            });

            const data = await response.json(); //Converter

            if (!response.ok) {
                throw new Error(data.mensagem || "Erro ao processar a requisição.");
            }

            setMensagem(data.mensagem || "Cadastro realizado com sucesso!");

            // Limpar o formulário
            event.target.reset();
        } catch (error) {
            
            setMensagem(error.message);
            console.error('Erro:', error);
        }
    };

    return (
        <div className="bg-gradient-red-black w-screen h-screen">
            <div className="justify-center p-10 flex">
                <form className="bg-slate-950 rounded-md w-96 h-full mt-16 text-white" onSubmit={handleSubmit}>
                    <fieldset className="space-y-5 mt-4 justify-center text-center rounded-md border-2 w-80 h-96 mb-4 ml-8">
                        <legend className="text-xl font-sans rounded-md border-2 p-1">Informações Pessoais</legend>
                        <input className="w-60 rounded-sm h-10 outline-none text-black font-serif" type="text" name="nome" id="nome" placeholder="Nome" required />
                        <input className="w-60 rounded-sm h-10 outline-none text-black font-serif" type="email" name="email" id="email" placeholder="Email" required />
                        <input className="w-60 rounded-sm h-10 outline-none text-black font-serif" type="tel" name="telefone" id="telefone" placeholder="Telefone" required />
                        <input className="w-60 rounded-sm h-10 outline-none text-black font-serif" type="password" name="senha" id="senha" placeholder="Senha" required />
                        <input className="bg-blue-500 hover:bg-blue-700 cursor-pointer w-60 rounded-md h-10 outline-none" type="submit" value="Enviar" />
                    </fieldset>
                    <p className="text-white flex ml-4 font-serif">*O seu Usuário será o email cadastrado.</p>
                </form>
                {mensagem && (
                    <div className="ml-4 p-4 bg-black text-white rounded-md">
                        <h1>{mensagem}</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForPages;