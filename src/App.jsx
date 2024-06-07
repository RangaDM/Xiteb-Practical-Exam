import "./App.css";
import Footer from "./Components/Footer";
import { NavbarWithMegaMenu } from "./Components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
