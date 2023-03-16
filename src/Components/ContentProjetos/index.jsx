import { useState } from "react";
import "./style.css";

function ContentProjetos() {
    // Mudar conteudo do componente de acordo com o botão clicado
    const [ContentProjetos, setContentProjetos] = useState("home");

    return (
        <div className="ContentProjetos">
            <h3>Desenvolvimento de Ferramentas de Visão Computacional para Auxílio de Deficientes Visuais</h3>
            <p>
                Um dos principais desafios relacionado ao deslocamento de pessoas com necessidades especiais visuais em diferentes ambientes é lidar com obstáculos que estejam em
                seu caminho, principalmente quando esses obstáculos aparecem de forma inesperada ou repentina. Além disso, existem as dificuldades relacionadas à acessibilidade,
                quando edificações, estruturas e vias não estão adaptadas para fornecerem condições de movimentação segura para tais pessoas. Neste projeto, propõe-se desenvolver e
                implementar técnicas e ferramentas de visão computacional que auxiliem pessoas com necessidades especiais visuais a se locomover em ambientes distintos de forma
                segura, através da identificação de obstáculos e direção por alertas sonoros. Pretende-se utilizar os instrumentos sensoriais dos smartphones (acelerômetros,
                giroscópios e GPSs), principalmente as câmeras, para a implementação de um sistema de condução inteligente fundamentado em informações sensoriais visuais, fazendo
                com que pessoas com restrições visuais sejam auxiliadas na exploração de ambientes internos e externos. Além dos smartphones, outros dispositivos deverão ser
                testados, como o Microsoft Kinect. Algoritmos de visão computacional, fusão sensorial, reconhecimento visual de objetos, mapeamento visual de ambientes, e VSLAM,
                geralmente utilizados em sistemas de navegação de veículos autônomos, deverão ser estudados, adaptados e avaliados para o desenvolvimento completo do sistema de
                condução inteligente. Com esse, sistema pretende-se fornecer aos portadores de necessidades especiais visuais uma ferramenta que lhes dê uma descrição dos espaços
                vazios e espaços ocupados do ambiente no qual ele se encontra, uma espécie de sistema visual artificial. Um mapeamento panorâmico do ambiente deverá ser estimado
                pelo sistema sensorial e descrito sonoramente ao usuário, auxiliando-o na sua locomoção segura.
            </p>
            <p>Integrantes:</p>
            <div className="infos">
                <ul className="lista">
                    <li>Anderson Abner de Santana Souza (Coordenador);</li>
                    <li>Bruno Agenor S. Santana (integrante).</li>
                </ul>
                <span>Situação: Concluído.</span>
            </div>

            <h3>Resolução Numérica de Problemas Inversos de Autovalores com Aplicações em Engenharia</h3>
            <p>
                O problema de inversão de autovalores traz consigo uma área diversa, cheia de interesses de pesquisas e atividades. Entre os desenvolvimento correntes, o problema
                inverso quadrático de autovalores (QIEP) é particularmente mais importante e desafiador com várias questões ainda em aberto. A ênfase principal desta pesquisa
                proposta é levar em consideração uma restrição crítica que aparece na prática: em um sistema físico grande e complexo é geralmente impossível obter informação no
                seu espectro de distribuição completo. Além disso, valores relacionados com termos de altas frequências num modelo de elementos finitos são geralmente suscetíveis a
                erros devido à largura de faixa finita dos equipamentos de medida. A informação espectral, então, não pode nem deve ser usada em toda sua extensão. Por essas
                razões, é recomendável considerar o problema inverso de autovalores quando apenas uma parte dos dados está estabelecida. A base matemática e desenvolvimento de
                ferramentas que propicie a resolução de problemas relacionados serão desenvolvidos durante a vigência do presente projeto, em conjunto com a equipe do pesquisador
                visitante e dos alunos e professores envolvidos, da UFRN.
            </p>
            <p>Integrantes:</p>
            <div className="infos">
                <ul>
                    <li>Anderson Abner de Santana Souza (Integrante);</li>
                    <li>Gonçalves, Luiz M. G. (Coordenador);</li>
                    <li>Biswa Nath Datta (Integrante).</li>
                </ul>
                <span>Situação: Concluído.</span>
            </div>
        </div>
    );
}

export default ContentProjetos;
