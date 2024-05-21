const FAQSection = () => {
  return (
    <div className="blurBg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-8 text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Have a question? We`ve got answers!</p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col lg:flex-row">
            {/* FAQ 1 */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  How do I sign up for tutoring sessions?
                </h3>
                <p className="text-gray-700">
                  Signing up for tutoring sessions is easy! Simply create an
                  account on our website, browse available tutors, and book a
                  session that fits your schedule.
                </p>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="w-full ml-4 lg:w-1/2">
              <div className="bg-white  rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  What subjects do your tutors cover?
                </h3>
                <p className="text-gray-700">
                  Our tutors cover a wide range of subjects, including math,
                  science, languages, test preparation, and more. You can find
                  tutors using our search filters.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 3 */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">
              How do I pay for tutoring sessions?
            </h3>
            <p className="text-gray-700">
              We offer secure payment options for tutoring sessions. You can pay
              using credit/debit cards or other available payment methods
              through our platform. Payment details will be provided when you
              book a session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
