import bgImage from "../../../images/sectionbg.jpg";
import { BiBookOpen } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { GiCrystalBall } from "react-icons/gi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { MdLightbulbOutline } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";

export default function KnowledgeBase() {
  return (
    <div
      className="w-full py-10 customBgStyle"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.701),rgba(0, 0, 0, 0.288)),url(${bgImage})`,
      }}
    >
      <div className="container mx-auto px-2 py-5">
        <h1 className="text-3xl my-4 font-bold text-white text-center">
          Knowledge Base
        </h1>
        <p className="text-center text-white">
          Wisdom Warehouse: Explore Your Knowledge Base
        </p>
        <div className="w-full pt-7 grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <BiBookOpen className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">Quick Facts</h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <AiFillQuestionCircle className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">FAQs Corner</h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <HiOutlineBookOpen className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">Glossary Guide</h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <GiCrystalBall className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">
              In-Depth Insights
            </h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <BsJournalBookmarkFill className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">
              Research Repository
            </h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <SiGoogleclassroom className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">Topic Tidbits</h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <MdLightbulbOutline className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">
              Knowledge Nuggets
            </h1>
          </div>
          <div className="w-full p-5 blurBg rounded-md flex flex-col gap-4 text-white justify-center items-center shadow-md">
            <RiBook2Line className="text-4xl" />
            <h1 className="text-2xl font-bold text-center">Learning Library</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
