import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
