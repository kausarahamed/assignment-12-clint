import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Addreview from "./components/Addreview";
import MakeAdmin from "./components/Admin/MakeAdmin";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Login/Register";
import RequierAuth from "./components/Auth/RequierAuth/RequierAuth";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import Navber from "./components/Home/Navber";
import MyItem from "./components/MyItem";
import MyProfile from "./components/MyProfile";
import Notfound from "./components/notfound/Notfound";
import Order from "./components/Order";
import Purchase from "./components/Purchase";
import AddItem from "./components/Shared/AddItem";
import Blogs from "./components/Shared/Blogs";

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<About></About>}></Route>
        <Route
          path="dashboard"
          element={
            <RequierAuth>
              <DashBoard></DashBoard>
            </RequierAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
          <Route path="addreview" element={<Addreview></Addreview>}></Route>
          <Route path="additem" element={<AddItem></AddItem>}></Route>
          <Route path="myitem" element={<MyItem></MyItem>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
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
