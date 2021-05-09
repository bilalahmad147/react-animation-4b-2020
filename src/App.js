import React from "react";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import NavbarHeader from "./components/NavBar/Navbar";

function App() {
  return (
    <div>
      <NavbarHeader />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
