import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Login/Register";

import Navber from "./components/Home/Navber";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
