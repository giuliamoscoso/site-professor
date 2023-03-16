import ContentEventos from "../Components/ContentEventos";
import Header from "../Components/Header";
import Profile from "../Components/Profile";

function Eventos() {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <div>
                    <Profile />
                </div>
                <ContentEventos />
            </div>
        </div>
    );
}

export default Eventos;
