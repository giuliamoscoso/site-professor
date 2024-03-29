import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import "./style.css";

function Profile() {
    return (
        <div className="profile">
            <div id="foto">
                <img id="fotoAbner" src="src/assets/abner.png" alt="Foto de perfil do Professor Abner" />
            </div>
            <h3>Anderson Abner</h3>
            <p>Professor Doutor da Universidade do Estado do Rio Grande do Norte.</p>
            <h3>Onde me encontrar?</h3>
            <ul className="contatos">
                <li className="item">
                    <IoMail className="contato" />
                    <span>andersonabner@uern.br</span>
                </li>
                <li className="item">
                    <AiFillInstagram className="contato" />
                    <span>@anderson.abner</span>
                </li>
                <li className="item">
                    <RiLinkedinBoxFill className="contato" />
                    <span>@andersonabner</span>
                </li>
                <li className="item">
                    <CgFileDocument className="contato" />
                    <a id="hover-underline-animation" href="http://lattes.cnpq.br/2563070123322776">
                        Currículo Lattes
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
