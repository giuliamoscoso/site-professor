import ContentTrabalhos from "../Components/ContentTrabalhos";
import Header from "../Components/Header";
import Profile from "../Components/Profile";

function Trabalhos() {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <div>
                    <Profile />
                </div>
                <ContentTrabalhos />
            </div>
        </div>
    );
}

export default Trabalhos;
