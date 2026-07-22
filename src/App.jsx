import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Hero    from './sections/Hero';
import About   from './sections/About';
import Skills  from './sections/Skills';
import Projects from './sections/Projects';
import Contact  from './sections/Contact';
import useDarkMode from './hooks/useDarkMode';

/**
 * App — root component that assembles the full single-page layout.
 * Dark mode class is applied at this level so all children respond.
 */
function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggle} />

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
