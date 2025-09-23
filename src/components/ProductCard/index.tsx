import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  nome: string;
  img: string;
  preco: number;
  tipo:
    | "aco"
    | "plastico"
    | "aluminio"
    | "papel"
    | "vidro"
    | "tecido"
    | "madeira"
    | "bateria"
    | "eletronico"
    | "oleo"
    | "borracha"
    | "isopor";
};

// Mapeamento direto do tipo -> classe CSS
const tipoClassMap: Record<Props["tipo"], string> = {
  aco: styles.aco,
  plastico: styles.plastico,
  aluminio: styles.aluminio,
  papel: styles.papel,
  vidro: styles.vidro,
  tecido: styles.tecido,
  madeira: styles.madeira,
  bateria: styles.bateria,
  eletronico: styles.eletronico,
  oleo: styles.oleo,
  borracha: styles.borracha,
  isopor: styles.isopor,
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
