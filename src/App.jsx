import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
