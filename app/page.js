import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

import Stars from "@/components/Stars";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-5rem)]">
      {/* <div className="relative"> */}
      <Intro />
      <Stars title="About" index={1} />
  
      <About />
      <Stars title="Projects" index={2} />
      <Projects />
      <Stars title="Contact" index={3} />
      <Contact />
      {/* </div> */}
    </main>
  );
}
