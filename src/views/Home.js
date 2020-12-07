import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import "popper.js";
import Navbar from "../components/js/Navbar";
import Header from "../components/js/Header";
import SkillContent from "../components/js/Skill-Content";
import WebTechnologyContent from "../components/js/WebTechnology-Content";
import AndroidTechnologyContent from "../components/js/AndroidTechnology-Content";
import DesignTechnologyContent from "../components/js/DesignTechnology-Content";
import CertificatesContent from "../components/js/Certificates-Content";
import ProjectsContent from "../components/js/Projects-Content";
import Footer from "../components/js/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SkillContent/>
      <WebTechnologyContent/>
      <AndroidTechnologyContent/>
      <DesignTechnologyContent/>
      <CertificatesContent/>
      <ProjectsContent/>
      <Footer/>
    </div>
  );
}

export default App;