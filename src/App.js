import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<UserList />} />
    <Route path="/user/:userId" element={<User />} />
    <Route path="/newUser" element={<NewUser />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/product/:productId" element={<Product />} />
    <Route path="/newproduct" element={<NewProduct />} />
   </Routes>
    </div>
    </div>
  );
}

export default App;
