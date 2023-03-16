import { FaRobot } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <div id="logo">
                <FaRobot className="icon" />
            </div>
            <div className="paginas">
                <NavLink to="/" activeClassName="select">
                    Sobre
                </NavLink>
                <NavLink to="/trabalhos" activeClassName="select">
                    Trabalhos
                </NavLink>
                <NavLink to="/disciplinas" activeClassName="select">
                    Disciplinas
                </NavLink>
                <NavLink to="/eventos" activeClassName="select">
                    Eventos
                </NavLink>
                <NavLink to="/pesquisa" activeClassName="select">
                    Projetos de Pesquisa
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
