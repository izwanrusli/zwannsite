import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Hero    from './sections/Hero';
import About   from './sections/About';
import Skills  from './sections/Skills';
import Projects from './sections/Projects';
import Contact  from './sections/Contact';

/**
 * App — root component. Dark mode is always active.
 */
function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
