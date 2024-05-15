import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import ParallaxText from "@/components/ScrollVelocity";
import Stars from "@/components/Stars";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-5rem)]">
      {/* <div className="relative"> */}
      <Intro />
      <Stars title="About" />
      {/* <ParallaxText baseVelocity={-5}>Skills</ParallaxText>
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText>
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText>
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText> */}
      <About />
      <Stars title="Projects" />
      <Projects />
      <Stars title="Contact" />
      <Contact />
      {/* </div> */}
    </main>
  );
}
