import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <div className="w-full">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={ user ? <Navigate replace to='/' /> : <Register/>} />
      <Route path="/login" element={user ? <Navigate replace to='/' /> :<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
