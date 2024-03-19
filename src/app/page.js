import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Landing from "./components/Landing";
import Left from "./components/Left";
import Marquee from "./components/Marquee";
import MoreWorks from "./components/MoreWorks";
import Navbar from "./components/Navbar";
import Works from "./components/Works";



export default function Home() {
  return (
    <div className="md:min-h-screen max-w-wcreen bg-[#090809]">
      <Navbar />
      <Landing />
      <Left />
      <About />
      <Works />
      <MoreWorks />
      <Marquee />
      <Faq />
      <Contact />
    </div>
  );
}
