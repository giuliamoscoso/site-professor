import ContentDisciplinas from "../Components/ContentDisciplinas";
import Header from "../Components/Header";
import Profile from "../Components/Profile";

function Disciplinas() {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <div>
                    <Profile />
                </div>
                <ContentDisciplinas />
            </div>
        </div>
    );
}

export default Disciplinas;
