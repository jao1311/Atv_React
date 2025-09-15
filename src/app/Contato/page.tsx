'use client'
import TextField from "@/components/TextField";
import "./styles.css"
import Header from "../../components/Header/index"
export default function Contato() {

let nome = "";
let email = "";
let assunto = "";
let mensagem = "";

  function botaoEnviarOnClick(){
    alert(`${nome}\n${email}\n${assunto}\n${mensagem}`);
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
    <Header/>  
    <form action="" className ="formContato">
      <TextField label="Nome" type="text" onChange={handleNomeChange}/>
      <TextField label="E-mail" type="email" onChange={handleEmailChange}/>
      <TextField label="Assunto" type="text" onChange={handleAssuntoChange} text="Mensagem do Site"/>
      <TextField label="Mensagem" type="text" multiline onChange={handleMensagemChange} text="Monk Flip"/>
      <button onClick={botaoEnviarOnClick}>Enviar</button>
    </form>
    </>
  );
}
