
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Hero from './components/pages/Hero';
import Newsletter from './components/pages/Newsletter';
import Service from './components/pages/Service';
import Team from './components/pages/Team';
import Testimonial from './components/pages/Testimonial';

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <Service />
     <Contact />
     <About />
     <Team />
     <Testimonial />
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
