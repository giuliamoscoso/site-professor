import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./Pages/Sobre";
import Trabalhos from "./Pages/Trabalhos";
import Disciplinas from "./Pages/Disciplinas";
import Eventos from "./Pages/Eventos";
import Projetos from "./Pages/Projetos";

import "./style.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="/trabalhos" element={<Trabalhos />} />
                <Route path="/disciplinas" element={<Disciplinas />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/pesquisa" element={<Projetos />} />
            </Routes>
        </Router>
    );
}

export default App;
