import Content from "./Components/Content";
import Header from "./Components/Header";
import MainSubjects from "./Components/MainSubjects";
import Profile from "./Components/Profile";
import "./style.css";

function App() {
    return (
        <div className="App">
            <Header />
            <div id="wrapper">
                <div>
                    <Profile />
                </div>
                <Content />
                <MainSubjects />
            </div>
        </div>
    );
}

export default App;
