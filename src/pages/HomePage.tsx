import AboutTheTool from "../components/Aboutthetool";
import ActionSection from "../components/ActionSection";
import FeaturesSection from "../components/Featuressection";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/Howitworkssection";
import MissionSection from "../components/MissionSection";
import Partner from "../components/Partner";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/Solutionsection";
import VideoSection from "../components/VideoSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Partner />
      <ProblemSection />
      <AboutTheTool />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MissionSection />
      <VideoSection />
      <ActionSection />
    </>
  );
};

export default HomePage;
