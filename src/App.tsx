import { BrowserRouter } from "react-router-dom";
import { Nav } from "./nav";
import View_Post from "./components/View_Post";
import PostScreen from "./components/PostScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <PostScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
