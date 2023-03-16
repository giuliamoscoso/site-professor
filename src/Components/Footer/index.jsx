import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div id="div-footer">
                Desenvolvido por{" "}
                <a id="animation" href="https://www.github.com/giuliamoscoso" target="_blank">
                    Giulia Moscoso
                </a>
                <a href="https://www.linkedin.com/in/giuliamoscoso/" target="_blank">
                    <RiLinkedinBoxFill size={25} />
                </a>
                <a href="https://www.github.com/giuliamoscoso" target="_blank">
                    <FaGithubSquare size={22} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
