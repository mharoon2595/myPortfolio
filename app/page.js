import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import ParallaxText from "@/components/ScrollVelocity";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-5rem)]">
      {/* <div className="relative"> */}
      <Intro />
      {/* <ParallaxText baseVelocity={-5}>Skills</ParallaxText>
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText>
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText>
      <ParallaxText baseVelocity={-5}>Skills</ParallaxText> */}
      <About/>
      <Projects/>
      <Contact/>
      {/* </div> */}
    </main>
  );
}
