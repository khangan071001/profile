import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "../src/components/ui-project/Navbar/navbar";
import Banner from "../src/components/ui-project/banner/banner";
import Skills from "../src/components/ui-project/skills/skills";
import Project from "../src/components/ui-project/projects/project";
import Contact from "../src/components/ui-project/contact/contact";
import Footer from "../src/components/ui-project/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
