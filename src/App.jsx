
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Mentors from './pages/Mentors';
import FAQs from './pages/FAQs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
