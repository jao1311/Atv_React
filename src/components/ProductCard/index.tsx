import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  nome: string;
  img: string;
  preco: number;
  tipo:
    | "gato"
    | "cachorro"
    | "passaro"
    | "peixe"
    | "roedor"
    | "fazenda"
    | "A";
};

// Mapeamento direto do tipo -> classe CSS
const tipoClassMap: Record<Props["tipo"], string> = {
  gato: styles.gato,
  cachorro: styles.cachorro,
  passaro: styles.passaro,
  peixe: styles.peixe,
  roedor: styles.roedor,
  fazenda: styles.fazenda,
  A: styles.A,
};

export default function ProductCard({ nome, img, preco, tipo }: Props) {
  const className = `${styles.root} ${tipoClassMap[tipo]}`;
  
  return (
    <section className={className}>
      <h3>{nome}</h3>
      <Image src={img} alt={nome} width={128} height={128} />
      <h4>R$: { Number(preco).toFixed(2) }</h4>
    </section>
  );
}
