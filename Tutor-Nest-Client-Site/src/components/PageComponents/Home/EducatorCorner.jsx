import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { IoMdClipboard } from "react-icons/io";

export default function EducatorCorner() {
  return (
    <div className="w-full py-7">
      <div className="container mx-auto p2 gap-y-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full col-span-1 sm:col-span-2">
          <h1 className="text-3xl font-bold my-3">Educator`s Corner</h1>
          <p className="text-xl">
            Pedagogical Perspectives: Insights from the Classroom
          </p>
        </div>
        <div className="w-full row-span-1 md:row-span-2 px-5">
          <div className="w-full p-5 rounded-md shadow-md">
            <GiTeacher className="text-5xl m-3" />
            <h1 className="text-2xl font-bold my-3">
              Teaching Techniques Unveiled
            </h1>
            <p className="text-justify">
              Explore innovative teaching methods and strategies shared by
              experienced educators. From flipped classrooms to project-based
              learning, discover new ways to engage and inspire your students
            </p>

            <Link to={`/services`}>
              <button className="button w-[180px] mt-4 border shadow-md">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="w-full mt-0 md:mt-[100px] p-5 rounded-md shadow-md">
            <TfiBookmarkAlt className="text-5xl m-3" />
            <h1 className="text-2xl font-bold my-3">
              Professional Development Spotlight
            </h1>
            <p className="text-justify">
              Delve into the world of teacher training and growth opportunities.
              Learn about workshops, conferences, and online courses designed to
              enhance your skills and keep you updated with the latest trends in
              education
            </p>
            <Link to={`/services`}>
              <button className="button w-[180px] mt-4 border shadow-md">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="w-full p-5 rounded-md shadow-md">
            <IoMdClipboard className="text-5xl m-3" />
            <h1 className="text-2xl font-bold my-3">
              Educator`s Toolbox: Resources for Success
            </h1>
            <p className="text-justify">
              Access a curated collection of lesson plans, worksheets, teaching
              aids, and educational apps to enrich your classroom experience.
              Whether you teach STEM subjects or humanities, find valuable
              resources to support your teaching goals
            </p>
            <Link to={`/services`}>
              <button className="button w-[180px] mt-4 border shadow-md">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
