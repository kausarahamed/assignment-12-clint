import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Login/Register";
import RequierAuth from "./components/Auth/RequierAuth/RequierAuth";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import Navber from "./components/Home/Navber";
import Notfound from "./components/notfound/Notfound";
import Purchase from "./components/Purchase";
import Blogs from "./components/Shared/Blogs";

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequierAuth>
              <DashBoard></DashBoard>
            </RequierAuth>
          }
        ></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequierAuth>
              <Purchase></Purchase>
            </RequierAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
