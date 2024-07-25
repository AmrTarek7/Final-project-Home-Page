// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";
import Footerr from "./components/Footer/Footer";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MainContent />
      <Footerr/>
    </React.Fragment>
  );
}

export default App;
