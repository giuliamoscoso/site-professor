import { useState } from "react";
import "./style.css";

function ContentDisciplinas() {
    // Mudar conteudo do componente de acordo com o botão clicado
    const [ContentDisciplinas, setContentDisciplinas] = useState("home");

    return (
        <div className="ContentDisciplinas">
            <h3>Disciplinas Ministradas</h3>
            <div className="card">
                <div className="infoCard">
                    <img className="imgDisciplina" src="src/assets/robotica-movel.png" alt="Imagem representando robótica móvel" />
                </div>
                <div className="contentCard">
                    <p className="tituloCard">Introdução À Robótica Móvel</p>
                    <p>
                        Sistema robóticos móveis. Sistemas de locomoção dos robôs móveis. Modelos matemáticos que descrevem os movimentos dos robôs móveis. Sistemas de sensores
                        para robôs. Mapeamento de ambientes e localização. Planejamento de caminhos com desvio de obstáculos.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="infoCard">
                    <img className="imgDisciplina" src="src/assets/aprendizagem-robotico.png" alt="Imagem representando robótica móvel" />
                </div>
                <div className="contentCard">
                    <p className="tituloCard">Aprendizagem Robótica</p>
                    <p>
                        Organização de máquinas computacionais: Interfaces e Periféricos, Unidade de Controle, Hierarquia de Memória e Unidade de Processamento; Barramento;
                        Comunicações; Conjunto de Instruções; Mecanismos de Interrupção e de Exceção; Paralelismo no Nível de Instruções; Multiprocessadores; Multicomputadores;
                        Arquiteturas Paralelas.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="infoCard">
                    <img className="imgDisciplina" src="src/assets/automacao.png" alt="Imagem representando automação" />
                </div>
                <div className="contentCard">
                    <p className="tituloCard">Automação</p>
                    <p>
                        Automação de processos contínuos e discretos. Modelagem matemática. Controle de processos. Supervisão e controle integrado. Implementação. Hardware,
                        Software e Programação.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContentDisciplinas;
