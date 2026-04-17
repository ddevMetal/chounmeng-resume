import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Summary        from './components/Summary';
import Skills         from './components/Skills';
import Experience     from './components/Experience';
import Education      from './components/Education';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Awards         from './components/Awards';
import Footer         from './components/Footer';

export default function App() {
  return (
    <div className="bg-cv-navy min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}
