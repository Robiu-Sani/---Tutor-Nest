import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ClientReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      name: "Emily Parker",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGt7oXF1mYyEDLv1HICQd-iKzmBeH_7ErwJl7KPPvXw&s",
      review:
        "Tutor Nest has been a game-changer for me. The personalized attention and support I received from my tutor made all the difference in my academic journey. Highly recommended!",
    },
    {
      id: 2,
      name: "Daniel Nguyen",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      review:
        "I'm so grateful for the incredible tutors I found on Tutor Nest. They not only helped me understand difficult concepts but also inspired me to love learning even more. Thank you!",
    },
    {
      id: 3,
      name: "Sophia Johnson",
      image:
        "https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=ais_user",
      review:
        "As a parent, finding the right tutor for my child was crucial. Tutor Nest made the process easy and stress-free. The tutors are knowledgeable, patient, and dedicated to their students' success.",
    },
    {
      id: 4,
      name: "Brock taisen",
      image:
        "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
      review:
        "I'm so grateful for the incredible tutors I found on Tutor Nest. They not only helped me understand difficult concepts but also inspired me to love learning even more. Thank you!",
    },
    {
      id: 5,
      name: "Sophia jasika",
      image:
        "https://theadultman.com/wp-content/uploads/2021/06/High-value-woman_-Attractive-brunette-girl-in-yellow-top-smiling-.jpg",
      review:
        "As a parent, finding the right tutor for my child was crucial. Tutor Nest made the process easy and stress-free. The tutors are knowledgeable, patient, and dedicated to their students' success.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 h-[500px] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-8 text-gray-900 tracking-tight mb-4">
            Student Reviews
          </h2>
          <p className="text-gray-600">
            Discover what our students have to say about their learning
            experience with Tutor Nest
          </p>
        </div>
        <div className="mt-10 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
            <button
              onClick={handlePrev}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-300 ease-in-out"
            >
              <FiChevronLeft className="h-8 w-8" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
            <button
              onClick={handleNext}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-300 ease-in-out"
            >
              <FiChevronRight className="h-8 w-8" />
            </button>
          </div>
          <div className="mx-auto">
            <div className="max-w-lg mx-auto relative">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`absolute transition duration-500 ease-in-out transform ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                >
                  <div className="bg-white shadow-md p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <h3 className="text-lg font-semibold ml-4">
                        {review.name}
                      </h3>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewSection;
