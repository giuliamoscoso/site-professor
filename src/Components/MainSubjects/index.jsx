import "./style.css";

function MainSubjects() {
    return (
        <div className="mainSubjects">
            <h3>Principais Áreas</h3>
            <div>
                <p id="first">Robótica Móvel</p>
                <input type="range" id="robotica" max={10} value={10} />
                <p>Visão Computacional</p>
                <input type="range" id="visao" max={10} value={8} />
                <p>Filtragem Estocástica</p>
                <input type="range" id="filtragem" max={10} value={2} />
                <p>Sistemas Embarcados</p>
                <input type="range" id="sistemas" max={10} value={5} />
                <p>Inteligência Artificial</p>
                <input type="range" id="ia" max={10} value={2} />
            </div>
        </div>
    );
}

export default MainSubjects;
