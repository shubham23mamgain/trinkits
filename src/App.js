import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Places from "./components/Places";
import Carousels from "./components/Carousels";
import Selects from "./components/Selects";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Places />
      <Search />
      <Selects />
      <Carousels />
      <Footer />
    </div>
  );
}

export default App;
