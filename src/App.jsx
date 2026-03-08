import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Header from "./assets/components/Header.jsx";
import Home from "./assets/components/Home.jsx";
import About from "./assets/components/About.jsx";
import Contact from "./assets/components/Contact.jsx";
import Amor from "./assets/components/Amor.jsx";
import './index.css';

function App() {
    return (
        <Router>
            <Header />
            <Amor />
            <main className="pt-24">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
}
export default App;