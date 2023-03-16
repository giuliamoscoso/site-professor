import { useState } from "react";
import "./style.css";

function ContentTrabalhos() {
    // Mudar conteudo do componente de acordo com o botão clicado
    const [ContentTrabalhos, setContentTrabalhos] = useState("home");

    return (
        <div className="ContentTrabalhos">
            <h3>Produção Bibliográfica</h3>
            <ul>
                <li>
                    LOPES, PAULO H. ; OLIVEIRA, BRUNO CRUZ ; SOUZA, ANDERSON ABNER DE S. ; BLANCO, WILFREDO . Mitigating Computer Limitations in Replicating Numerical Simulations
                    of a Neural Network Model With Hodgkin-Huxley-Type Neurons. Frontiers in Neuroinformatics, v. 16, p. 1-16, 2022.
                </li>
                <li>
                    BLANCO, WILFREDO ; LOPES, PAULO H. ; DE S. SOUZA, ANDERSON ABNER ; MASCAGNI, MICHAEL . Non-replicability circumstances in a neural network model with
                    Hodgkin-Huxley-type neurons. JOURNAL OF COMPUTATIONAL NEUROSCIENCE, v. 1, p. 1-7, 2020.
                </li>
                <li>
                    OLIVEIRA, FABIO ; SOUZA, ANDERSON ; FERNANDES, MARCELO ; GOMES, RAFAEL ; GONCALVES, LUIZ . Efficient 3D Objects Recognition Using Multifoveated Point Clouds.
                    SENSORS, v. 18, p. 2302, 2018.
                </li>
                <li>
                    GONZALEZ, M. V. S. ; SOUZA, A. A. S. . Robótica Educacional como Ferramenta Lúdica para o Ensino de Língua Inglesa. RENOTE. REVISTA NOVAS TECNOLOGIAS NA
                    EDUCAÇÃO, v. 15, p. 1, 2017.
                </li>
                <li>
                    PEREIRA, D. ; SANTANA, B. A. S. ; MAIA, R. S. ; SOUZA, A. A. S. . Uma Arquitetura de Cloud Robotics baseada em Clones para uma Equipe de CellBots. IEEE Latin
                    America Transactions, v. 15, p. 1587-1594, 2017.
                </li>
                <li>
                    SOUZA, ANDERSON; GONÇALVES, LUIZ M. G. . Occupancy-elevation grid: an alternative approach for robotic mapping and navigation. Robotica, v. 34, p. 2592-2609,
                    2016.
                </li>
                <li>
                    Aroca, Rafael V. ; Gomes, Rafael B. ; Tavares, Dalton M. ; SOUZA, A. A. S. ; BURLAMAQUI, Aquiles M. F. ; Caurin, Glauco A. P. ; Goncalves, Luiz M. G. ;
                    GONCALVES, L. . Increasing Students' Interest With Low-Cost CellBots. IEEE Transactions on Education, v. 56, p. 3-8, 2013.
                </li>
                <li>
                    BARBOSA, D. R. F. ; MAIA, R. S. ; SOUZA, A. A. S. . Heurística para Gerenciar a Cooperação de um Grupo de Robôs em Execução de Tarefas. Holos (Natal. Online),
                    v. 1, p. 172-181, 2012.
                </li>
                <li>
                    Souza, Anderson Abner S.; Gonçalves, Luiz M. G . 3D Robotic Mapping with Probabbilistic Occupancy Grids. International Journal of Engineering Sciences &
                    Emerging Technologies, v. 4, p. 15-25, 2012.
                </li>
            </ul>
            <h3>Capítulos De Livros Publicados</h3>
            <ul>
                <li>
                    SOUZA, A. A. S.; SANTANA, Andre M. ; MEDEIROS, Adelardo. A. D. ; Gonçalves, Luiz M. G . Mapeamento. In: ROMERO, R.; PRESTES, E.; OSÓRIO, F.; WOLF, D.. (Org.).
                    Robótica Móvel. 1ed.: LTC, 2014, v. , p. 161-175.
                </li>
                <li>
                    SOUZA, A. A. S.; MAIA, R. S. ; Gonçalves, Luiz M. G . 3D Probabilistic Occupancy Grid to Robotic Mapping with Stereo Vision. In: Dr. Asim Bhatti. (Org.).
                    Current Advancements in Stereo Vision. 1ed.Rijeka: InTech, 2012, v. 1, p. 1-21.
                </li>
                <li>
                    SANTANA, Andre M. ; SOUZA, A. A. S. ; ALSINA, Pablo Javier ; MEDEIROS, Adelardo. A. D. ; Gonçalves, Luiz M. G . Fusion of Odometry and Visual Datas to
                    Localization a Mobile Robot Using Extended Kalman Filter. In: Aleksandar Lazinica. (Org.). Sensor Fusion. 1ed.Rijeka: SCIYO, 2010, v. , p. 1-.
                </li>
                <li>
                    SOUZA, A. A. S.; SANTANA, Andre M. ; MEDEIROS, Adelardo. A. D. ; Gonçalves, Luiz M. G . Probabilistic Mapping by Fusion of Range-Finders Sensors and Odometry.
                    In: Aleksandar Lazinica. (Org.). Sensor Fusion. 1ed.Rijeka: SCIYO, 2010, v. , p. 423-442.
                </li>
            </ul>
        </div>
    );
}

export default ContentTrabalhos;
