import Link from 'next/link'
import './Nav.css'
export default function Nav (){
    return(
        <nav>

                <Link href= "/Contato" ><h1>Tabela de Preço por Recompensa</h1> </Link>
                <Link href= "/Cadastrar" ><h2>Cadastro</h2> </Link>

        </nav>
    );
}