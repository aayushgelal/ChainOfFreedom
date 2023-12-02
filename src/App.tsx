import { BrowserRouter, Route, Routes } from "react-router-dom";
import View_Post from "./components/View_Post";
import RootLayout from "./_root/pages/RootLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* public routes (Auth)*/}
        {/* private routes  */}
        <Route element={<RootLayout/>}>
          <Route index element={<View_Post/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
