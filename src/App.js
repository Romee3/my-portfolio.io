import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Header/>
    <main className='maine'>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
