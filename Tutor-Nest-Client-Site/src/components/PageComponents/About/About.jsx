import { Helmet } from "react-helmet-async";
import aboutimage from "../../../images/aboutPic.jpeg";
import AboutUsSection from "../Home/AboutUsSection";
import ClientReviewSection from "../Home/ClientReviewSection";
import EducatorCorner from "../Home/EducatorCorner";
import FAQSection from "../Home/FAQSection";
import KnowledgeBase from "../Home/KnowledgeBase";
import ServicesSection from "../Home/ServicesSection";
export default function About() {
  return (
    <div className="w-full  py-5 ">
      <Helmet>
        <title>Tutor Ease | About </title>
      </Helmet>
      <div className="container p-2 mx-auto rounded-md">
        <img
          src={aboutimage}
          alt=""
          className="w-full mb-4 rounded-md -z-10 max-h-[300px]"
        />
        <AboutUsSection></AboutUsSection>
      </div>
      <ServicesSection></ServicesSection>
      <KnowledgeBase></KnowledgeBase>
      <EducatorCorner></EducatorCorner>
      <ClientReviewSection></ClientReviewSection>
      <FAQSection></FAQSection>
    </div>
  );
}
