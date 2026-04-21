import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <AppRouter/>
      <Footer />
      </Router>
  );
}

export default App;
