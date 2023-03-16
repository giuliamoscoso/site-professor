import ContentSobre from "../Components/ContentSobre";
import Header from "../Components/Header";
import MainSubjects from "../Components/MainSubjects";
import Profile from "../Components/Profile";

function Sobre() {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <div>
                    <Profile />
                </div>
                <ContentSobre />
                <MainSubjects />
            </div>
        </div>
    );
}

export default Sobre;
