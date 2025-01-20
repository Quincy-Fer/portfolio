import { About, Footer, Hero, Navbar, Projects, Skills } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        
      </main>
      <Footer />
    </div>
  );
}
