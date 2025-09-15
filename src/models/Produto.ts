type Produto = {
    id: number;
    nome: string;
    img: string;
    preco: number;
    tipo: "aco" | "plastico" | "aluminio" | "papel" | "vidro" | "tecido" | "madeira" | "bateria" | "eletronico" | "oleo" | "borracha" | "isopor";
}

export default Produto;