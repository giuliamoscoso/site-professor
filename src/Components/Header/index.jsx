import { FaRobot } from "react-icons/fa";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <div id="logo">
                <FaRobot className="icon" />
            </div>
            <div className="paginas">
                <a href="/">Sobre</a>
                <a href="/trabalhos">Trabalhos</a>
                <a href="/disciplinas">Disciplinas</a>
                <a href="/eventos">Eventos</a>
                <a href="/projetos">Proj. de Pesquisa</a>
            </div>
        </header>
    );
}

export default Header;
