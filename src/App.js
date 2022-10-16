import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import About from './components/pages/About';
import Chat from "./components/pages/Chat";
import Contact from './components/pages/Contact';
import Product from "./components/pages/Product";
import Technology from './components/pages/Technology';


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/technology" element={ <Technology /> } />
      <Route path="/product" element={ <Product /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/chat" element={ <Chat /> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
