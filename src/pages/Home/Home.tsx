import {
  Hero,
  Features,
  About,
  FAQ,
  InstallGuide,
  Support,
} from "@/components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Features />
      <InstallGuide />
      <FAQ />
      <Support />
    </div>
  );
};

export default Home;
