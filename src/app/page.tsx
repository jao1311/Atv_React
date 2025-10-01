'use client'
import ProductList from "@/components/ProductList";
import "./page.css";
import Header from "@/components/Header";
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
import Loading from '../components/Loading/Loading'

export default function Home() {
  function sucesso(response:AxiosResponse){
    setProdutos(response.data )
  }
 
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
 
    function falha(){
      alert("FALHOU!")
    }
 
    function todoCaso(){
      setIsLoading(false)
    }
 
 
    function loadProdutos(){
      setIsLoading(true)
      axios.get("http://localhost:4000/animals")
      .then(sucesso)
      .catch(falha)
      .finally(todoCaso)
    }
   
    useEffect(loadProdutos,[]);

  return (
    <>
    <Header/>
      <h2>Preço do Kilo por Material e Imagem Exemplo</h2>
    {(isLoading) && (<Loading/>)}
<div className="lista">
      <ProductList produtos={produtos} />
</div>

    </>
  );
}