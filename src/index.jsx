import React from 'react';
import { createRoot } from "react-dom/client";
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';
const root = createRoot(document.getElementById("root"));

const App = () => {
  return (<div>
    <NavBar />
    <Main />
  </div>)
}

root.render(<App />);