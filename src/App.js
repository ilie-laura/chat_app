import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import "./styles/App.css";
const App = () => {
  return (
   <main className="App">
   <Navbar />
   <Hero />
   <Highlights />
   </main>
  );
}

export default App;
