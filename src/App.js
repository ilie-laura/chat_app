import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import "./styles/App.css";
import Features from "./components/Features";
const App = () => {
  return (
   <main className="App">
   <Navbar />
   <Hero />
   <Highlights />
   <Model />
   <Features />
   <HowItWorks />

   </main>
  );
}

export default App;
