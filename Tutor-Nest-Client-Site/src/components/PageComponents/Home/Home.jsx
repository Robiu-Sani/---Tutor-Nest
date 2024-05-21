import Banner from "./Banner";
import LogoContainer from "./LogoContainer";
import EducatorCorner from "./EducatorCorner";
import KnowledgeBase from "./KnowledgeBase";
import ServicesSection from "./ServicesSection";
import AboutUsSection from "./AboutUsSection";
import FAQSection from "./FAQSection";
import ClientReviewSection from "./ClientReviewSection";
import ServicesCardSection from "./ServicesCardSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Tutor Ease </title>
      </Helmet>
      <Banner></Banner>
      <LogoContainer></LogoContainer>
      <ServicesSection></ServicesSection>
      <ServicesCardSection></ServicesCardSection>
      <EducatorCorner></EducatorCorner>
      <KnowledgeBase></KnowledgeBase>
      <AboutUsSection></AboutUsSection>
      <ClientReviewSection></ClientReviewSection>
      <FAQSection></FAQSection>
    </div>
  );
}
