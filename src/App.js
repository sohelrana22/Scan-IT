import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import About from './components/pages/About';
import Career from "./components/pages/Career";
import CareerDetail from "./components/pages/CareerDetail";
import Contact from './components/pages/Contact';
import FAQ from "./components/pages/FAQ";
import Login from "./components/pages/Login";
import ProductDetail from "./components/pages/ProductDetail";
import Technology from './components/pages/Technology';
import TechnologyDetail from "./components/pages/TechnologyDetail";
import Register from "./components/Register/Register";
import Products from "./components/pages/Products";


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/technology" element={ <Technology /> } />
      <Route path="/products" element={ <Products /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/career" element={ <Career /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/experience" element={ <FAQ /> } />
      <Route path="/careerdetail" element={ <CareerDetail /> } />
      <Route path="/productdetail" element={ <ProductDetail /> } />
      <Route path="/technologydetail" element={ <TechnologyDetail /> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
