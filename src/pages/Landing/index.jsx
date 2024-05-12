import Header from "../../components/Header"
import Accueil from "./Accueil"
import Services from "./Services"
import Offres from "./Offres"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Landing() {
    return (
        <div>
            <Header />
            <Accueil />
            <Services />
            <Offres />
            <Contact />
            <Footer />
        </div>
    )
}