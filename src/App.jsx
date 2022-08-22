import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}

export default App;
