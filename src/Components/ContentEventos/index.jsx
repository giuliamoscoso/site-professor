import { useState } from "react";
import "./style.css";

function ContentEventos() {
    // Mudar conteudo do componente de acordo com o botão clicado
    const [ContentEventos, setContentEventos] = useState("home");

    return (
        <div className="ContentEventos">
            <h3>Participação Em Eventos, Congressos, Exposições E Feiras</h3>
            <ul>
                <li>Workshop of Robotics in Education.Educational Robotics as a Motivational Tool for the English Teaching-Learning Process for Children. 2018. (Oficina).</li>
                <li>XV Latin American Robotics Symposium.Path Planning Based on Traversability Evaluation from Occupancy-Elevation Grid Maps. 2018. (Simpósio).</li>
                <li>
                    14th Latin American Robotics Symposium. Using Polynomial Eigenvalue Problem Modeling to Improve Monocular Visual Odometry and 3D Mapping. 2017. (Congresso).
                </li>
                <li>
                    Sibgrapi - Simpósio Brasileiro em Computação Gráfica e Processamento de Imagens.Desenvolvimento de Ferramentas para Transmissão de Vídeo e uma Interface Gráfica
                    para Controle de Robôs no Projeto GIGA-VR. 2005. (Simpósio).
                </li>
                <li>Simpósio Brasileiro de Automação Inteligente.EQUIPE RECYCLER ROBOT CEFET-RN ? CATEGORIA ADVANCED. 2005. (Simpósio).</li>
            </ul>
            <h3>Organização De Eventos, Congresso, Exposições E Feiras</h3>
            <ul>
                <li>
                    Gonçalves, Luiz M. G ; SILVA, B. M. F. ; MELO, JULIO C. P. ; SOUZA, A. A. S. ; FERNANDES, CARLA C. . Latin American Robotic Symposium - LARS. 2020. (Congresso).
                </li>
                <li>SILVA, B. M. F. ; GONÇALVES, LUIZ M. G. ; Gomes, Rafael B. ; SOUZA, A. A. S. . XIII Workshop de Visão Computacional. 2017. (Congresso).</li>
                <li>MEDEIROS, F. D. ; SOUZA, A. A. S. . CSBC 2017 - Congresso Brasileiro da Sociedade Brasileira de Computação 2017. 2017. (Congresso).</li>
                <li>SOUZA, A. A. S.. Olimpíada Brasileira de Robótica. 2014.</li>
                <li>SOUZA, A. A. S.. Olimpíada Brasileira de Robótica. 2013.</li>
                <li>SOUZA, A. A. S.. Olimpíadas Brasileira de Robótica. 2008.</li>
            </ul>
        </div>
    );
}

export default ContentEventos;
