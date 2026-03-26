import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeHero from "./components/HomeHero/HomeHero";

function App() {
  return (
    <>
      <Header />
      <HomeHero/>
      <Footer />
    </>
  );
}

export default App;
