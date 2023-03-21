import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbar/navbar";
import Banner from "./components/banner/banner";
import Skills from "./components/skills/skills";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
