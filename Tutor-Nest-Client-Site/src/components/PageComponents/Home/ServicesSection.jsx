import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-8 text-gray-900 tracking-tight mb-4">
            Discover Our Services
          </h2>
          <p className="text-gray-600">
            Find the perfect tutor for your learning journey
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Subject Tutoring
              </h3>
              <p className="text-gray-700">
                Master challenging subjects with personalized tutoring sessions
                tailored to your needs.
                <br />
                <br />
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-200">
              <Link
                to={`/services`}
                className="block w-full py-2 px-4 text-center bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Service Card 2: Language Learning */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Language Learning
              </h3>
              <p className="text-gray-700">
                Become proficient in languages such as English, Spanish, French,
                and more through structured lessons and conversation practice.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-200">
              <Link
                to={`/services`}
                className="block w-full py-2 px-4 text-center bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Service Card 3: Test Preparation */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Test Preparation
              </h3>
              <p className="text-gray-700">
                Prepare with confidence for standardized tests and exams with
                customized study plans and expert strategies.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-200">
              <Link
                to={`/services`}
                className="block w-full py-2 px-4 text-center bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Add more service cards here */}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
