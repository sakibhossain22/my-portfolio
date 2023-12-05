import About from "../About-me/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import ContactInfo from "../Touch/Touch";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <ContactInfo></ContactInfo>
           <Footer></Footer>
        </div>
    );
};

export default Home;