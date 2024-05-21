import { BiTargetLock } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function AboutUsSection() {
  return (
    <div className="container mx-auto py-10 px-2">
      <h1 data-aos="zoom-in-up" className="text-center  text-3xl font-bold">
        About Us
      </h1>
      <h3 className="text-center text-xl my-5 font-bold">
        Unlocking Learning Potential: Our Story
      </h3>
      <div className="max-w-[1000px] mx-auto p-2">
        <p className="text-justify">
          At Tutor Nest, we believe in the power of education to transform
          lives. Our journey began with a simple yet profound mission: to
          provide accessible and personalized learning opportunities for
          students worldwide. With a team of passionate educators and
          technologists, we embarked on a quest to create a platform where
          learning knows no bounds.
        </p>
        <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="w-full p-3">
            <BiTargetLock className="text-4xl" />
            <h3 className="text-2xl my-4 font-bold">Our Vision</h3>
            <p className="text-justify">
              Our vision is to empower learners of all ages and backgrounds to
              reach their full potential. We envision a world where education is
              not confined by traditional barriers, but instead, fosters
              creativity, curiosity, and critical thinking.{" "}
            </p>
          </div>
          <div className="w-full p-3">
            <AiOutlineSafetyCertificate className="text-4xl" />
            <h3 className="text-2xl my-4 font-bold">Our Commitment</h3>
            <p className="text-justify">
              At Tutor Nest, our commitment is to excellence in education. We
              strive to provide a supportive and inclusive learning environment
              where every student feels valued and inspired to succeed. With a
              dedication to continuous improvement and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
