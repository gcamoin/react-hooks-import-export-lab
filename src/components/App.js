import React from "react";
import Home from "/home/gcamoin/react-hooks-import-export-lab/src/components/Home.js"
import About from "/home/gcamoin/react-hooks-import-export-lab/src/components/About.js"
import NavBar from "/home/gcamoin/react-hooks-import-export-lab/src/components/NavBar.js"
import {username, city, image} from "/home/gcamoin/react-hooks-import-export-lab/src/data/user.js"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
