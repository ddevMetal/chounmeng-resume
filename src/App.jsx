import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Summary        from './components/Summary';
import Certifications from './components/Certifications';
import Skills         from './components/Skills';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Education      from './components/Education';
import BeyondWork     from './components/BeyondWork';
import Footer         from './components/Footer';

// Page order. To add a section: create its component, import it above, and place it here.
export default function App() {
  return (
    <div className="bg-cv-navy min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Certifications />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <BeyondWork />
      </main>
      <Footer />
    </div>
  );
}
