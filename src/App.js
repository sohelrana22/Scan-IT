import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from './components/pages/About';
import Career from "./components/pages/Career";
import CareerDetail from "./components/pages/CareerDetail";
import Chat from "./components/pages/Chat";
import Contact from './components/pages/Contact';
import FAQ from "./components/pages/FAQ";
import Login from "./components/pages/Login";
import Product from "./components/pages/Product";
import Technology from './components/pages/Technology';
import Register from "./components/Register/Register";


function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Header /> */}
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/technology" element={ <Technology /> } />
      <Route path="/product" element={ <Product /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/chat" element={ <Chat /> } />
      <Route path="/career" element={ <Career /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/experience" element={ <FAQ /> } />
      <Route path="/careerdetail" element={ <CareerDetail /> } />
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
