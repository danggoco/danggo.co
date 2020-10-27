import React from "react";
import "./App.css";
import "./css/main.css";

import Banner from "./components/Banner";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Container>
        <Banner />
        <p>
          En danggo trabajamos por desarrollar soluciones ajustadas a 
          las necesidades de nuestros clientes basados en los siguientes tres ejes.
        </p>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
