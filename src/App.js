import React from "react";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import NavbarHeader from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavbarHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
