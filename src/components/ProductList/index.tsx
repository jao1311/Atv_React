import  Pet from "@/models/Pet";
import ProductCard from "../ProductCard/index";
import './styles.modules.css'

type Props = {
  pets: Pet[];
};

export default function ProductList({ pets }: Props) {
  return (
    <section className="Preco">
      
      {pets.map((Pet) => (
        <ProductCard
          key={Pet.id}
          nome={Pet.nome}
          img={Pet.img}
          preco={Pet.preco}
          tipo={Pet.tipo}
        />
      ))}
    </section>
  );
}
