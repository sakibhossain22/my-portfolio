import { FaArrowTurnUp } from "react-icons/fa6";
import About from "../About-me/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import ContactInfo from "../Touch/Touch";
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Projects></Projects>
           <ContactInfo></ContactInfo>
           <div className='flex items-center justify-end my-5'>
                <Link to="nav" spy={true} smooth={true}   offset={-30} duration={500}><button className='btn bg-blue-600 text-white ' ><FaArrowTurnUp></FaArrowTurnUp></button></Link>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;