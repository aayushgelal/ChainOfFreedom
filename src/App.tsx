import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Nav } from "./nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
