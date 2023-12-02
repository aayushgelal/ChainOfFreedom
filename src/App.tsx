import { BrowserRouter, Route, Routes } from "react-router-dom";
import View_Post from "./components/View_Post";
import RootLayout from "./_root/pages/RootLayout";
import posts from "./posts";
import PostScreen from "./components/PostScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* public routes (Auth)*/}
        {/* private routes  */}
        <Route element={<RootLayout/>}>
          <Route index element={<PostScreen/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
