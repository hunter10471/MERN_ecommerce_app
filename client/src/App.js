import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { useSelector } from "react-redux";
import { Footer } from "./components/Footer";
import { ProductPage } from "./pages/ProductPage"
import { CartPage } from "./pages/CartPage";
import { BillingPage } from "./pages/BillingPage";

function App() {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <div className="w-full">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/billing" element={<BillingPage/>} />
      <Route path="/register" element={ user ? <Navigate replace to='/' /> : <Register/>} />
      <Route path="/login" element={user ? <Navigate replace to='/' /> :<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
