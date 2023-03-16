import ContentProjetos from "../Components/ContentProjetos";
import Header from "../Components/Header";
import Profile from "../Components/Profile";

function Projetos() {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <div>
                    <Profile />
                </div>
                <ContentProjetos />
            </div>
        </div>
    );
}

export default Projetos;
