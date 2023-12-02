import { BrowserRouter } from "react-router-dom";
import { Nav } from "./nav";
import View_Post from "./components/View_Post";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <View_Post />
      </BrowserRouter>
    </div>
  );
}

export default App;
