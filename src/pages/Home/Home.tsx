import { Hero, Features, About, FAQ, InstallGuide } from "@/components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Features />
      <InstallGuide />
      <FAQ />
    </div>
  );
};

export default Home;
