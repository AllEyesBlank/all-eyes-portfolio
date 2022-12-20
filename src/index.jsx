import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const App = () => {
  return (<div>Hello World!</div>)
}

root.render(<App />);