import { About, Footer, Hero, Navbar, Projects, Skills } from "./components";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
