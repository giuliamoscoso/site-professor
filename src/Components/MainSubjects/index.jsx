import "./style.css";

function MainSubjects() {
    return (
        <div className="mainSubjects">
            <h3>Principais Áreas</h3>
            <div>
                <p>Robótica Móvel</p>
                <input type="range" id="robotica" />
                <p>Visão Computacional</p>
                <input type="range" id="visao" />
                <p>Filtragem Estocástica</p>
                <input type="range" id="filtragem" />
                <p>Sistemas Embarcados</p>
                <input type="range" id="sistemas" />
                <p>Inteligência Artificial</p>
                <input type="range" id="ia" />
            </div>
        </div>
    );
}

export default MainSubjects;
