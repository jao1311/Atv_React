import Image from "next/image";
import produtos from "@/mocks/Produtos";
import ProductList from "@/components/ProductList";
import "./page.css"
import Header from "@/components/Header";
export default function Home() {
  return (
    <>
    <Header/>
     
      <section className="Nome">
        <h2>Nome dos Materiais Recicláveis</h2>
        <ul>
          {produtos.map((p) => (
            <li key={p.id}>
              <h3>{p.nome}</h3>
            </li>
          ))}
        </ul>
      </section>
      <h2>Preço do Kilo por Material e Imagem Exemplo</h2>
<div className="lista">
      <ProductList produtos={produtos} />
</div>

    </>
  );
}