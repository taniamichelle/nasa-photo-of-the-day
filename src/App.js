import React from "react";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Logo from './components/Logo';

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Logo /> */}
      <Header />
      <Content />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Footer />
    </div>
  );
}

export default App;
