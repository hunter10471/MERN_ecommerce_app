import { Navbar } from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { AnimatedRoutes } from "./components/AnimatedRoutes"
import { TakeToTop } from './components/TakeToTop';


function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
      <Navbar />
      <AnimatedRoutes/>
      <TakeToTop/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
