import "./App.css";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />  
      <Intro />   
      <div className="divider"></div>
      <Project />
      <div className="divider"></div>
      <Timeline /> 
      <div className="divider"></div>
      <ContactMe />
      <Footer/>
    </>
  );
}

export default App;
