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

  
  
  
  
  /*
      <>
      <h1 className="Titulo">Tabela de Preço por Recompensa</h1>
      <Image
      src="/foto1.png"
      alt="Símbolo Reciclagem"
      width={256}
      height={256}
      />
      
      <section className="Nome">
      <h2>Nome dos Materiais Recicláveis</h2>
      <ul>
      <li><h3>Plástico</h3></li>
      <li><h3>Metal (Alumínio e Aço)</h3></li>
      <li><h3>Papel</h3></li>
      <li><h3>Vidro</h3></li>
      <li><h3>Madeira</h3></li>
      <li><h3>Tecido</h3></li>
      <li><h3>Baterias e Pilhas</h3></li>
      <li><h3>Lixo Eletrônico</h3></li>
      <li><h3>Óleo de Cozinha</h3></li>
      <li><h3>Borracha</h3></li>
      </ul>
      </section>
      
      <section className="Preco">
      <h2>Preço do Kilo por Material e Imagem Exemplo</h2>
      
      <section className="Plastico">
      <h3>Plástico</h3>
            <Image src="/foto2.png" alt="Plástico" width={128} height={128} />
            <h4>R$: 2,00</h4>
            </section>
            
            <section className="Aco">
            <h3>Aço</h3>
            <Image src="/foto3.png" alt="Aço" width={128} height={128} />
            <h4>R$: 0,80</h4>
            </section>
            
            <section className="Aluminio">
            <h3>Alumínio</h3>
            <Image src="/foto4.png" alt="Alumínio" width={128} height={128} />
            <h4>R$: 6,00</h4>
            </section>
            
            <section className="Papel">
            <h3>Papel</h3>
            <Image src="/foto5.png" alt="Papel" width={128} height={128} />
            <h4>R$: 1,00</h4>
            </section>
            
            <section className="Vidro">
            <h3>Vidro</h3>
            <Image src="/foto6.png" alt="Vidro" width={128} height={128} />
            <h4>R$: 0,20</h4>
          </section>
          
          <section className="Madeira">
          <h3>Madeira</h3>
          <Image src="/foto7.png" alt="Madeira" width={128} height={128} />
          <h4>R$: 0,50</h4>
          </section>
          
          <section className="Tecido">
            <h3>Tecido</h3>
            <Image src="/foto8.png" alt="Tecido" width={128} height={128} />
            <h4>R$: 0,70</h4>
            </section>
            
            <section className="Bateria">
            <h3>Baterias e Pilhas (Coleta Especial)</h3>
            <Image src="/foto9.png" alt="Baterias e Pilhas" width={128} height={128} />
            <h4>R$: 0,00</h4>
            </section>
            
            <section className="Eletronico">
            <h3>Lixo Eletrônico</h3>
            <Image src="/foto10.png" alt="Lixo Eletrônico" width={128} height={128} />
            <h4>R$: 3,00</h4>
            </section>
            
            <section className="Oleo">
            <h3>Óleo de Cozinha</h3>
            <Image src="/foto11.png" alt="Óleo de Cozinha" width={128} height={128} />
            <h4>R$: 2,50</h4>
            </section>
            
            <section className="Borracha">
            <h3>Borracha</h3>
            <Image src="/foto12.png" alt="Borracha" width={128} height={128} />
            <h4>R$: 0,40</h4>
            </section>
            </section>
            
            </>*/
