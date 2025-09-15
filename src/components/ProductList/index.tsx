import  Produto from "@/models/Produto";
import ProductCard from "../ProductCard/index";
import './styles.modules.css'

type Props = {
  produtos: Produto[];
};

export default function ProductList({ produtos }: Props) {
  return (
    <section className="Preco">
      
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          img={produto.img}
          preco={produto.preco}
          tipo={produto.tipo}
        />
      ))}
    </section>
  );
}
