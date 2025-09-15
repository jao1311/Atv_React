'use client'
import TextField from "@/components/TextField";
import Image from "next/image";

export default function Contato() {

let nome = "";
let email = "";
let assunto = "";
let mensagem = "";

  function botaoEnviarOnClick(){
    alert();
  }
  function handleNomeChange(texto: string){
    nome = texto;
  }
  function handleEmailChange(texto: string){
    email = texto;
  }
  function handleAssuntoChange(texto: string){
    assunto = texto;
  }
  function handleMensagemChange(texto: string){
    mensagem = texto;
  }

  return (
    <>
    <form action="" className ="formContato">
      <TextField label="Nome" type="text" onChange={handleNomeChange}/>
      <TextField label="E-mail" type="email" onChange={handleEmailChange}/>
      <TextField label="Assunto" type="text" onChange={handleAssuntoChange}/>
      <TextField label="Mensagem" type="text" multiline onChange={handleMensagemChange}/>
      <button onClick={botaoEnviarOnClick}>Enviar</button>
    </form>
    </>
  );
}
