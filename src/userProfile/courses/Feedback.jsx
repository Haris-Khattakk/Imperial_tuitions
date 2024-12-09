import React, { useState } from "react";

const Feedback = ({ closeFeedback }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value); // Update the rating when a star is clicked
  };

  const handleSubmit = () => {
    // Add any logic for handling the feedback submission (e.g., API calls)
    closeFeedback(); // Close the modal
  };

  return (
    <div className="w-full flex justify-end backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="py-10 px-5 border w-full max-w-[60%] bg-white shadow-lg rounded-lg m-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-poppins text-2xl md:text-3xl underline">
            Give Your Feedback
          </h2>
          <button
            onClick={closeFeedback}
            className="text-2xl font-bold text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>

        {/* Feedback Form */}
        <div className="text-sm md:text-base font-poppins">
          <div className="flex flex-col gap-4">
            <div className="p-3 rounded-lg shadow-lg bg-gradient-to-b from-[#FFF0C7] to-[#FFF6DE]">
              <p>Quantum Mechanics</p>
            </div>
            <div className="p-3 rounded-lg shadow-lg bg-gradient-to-b from-[#FFF0C7] to-[#FFF6DE]">
              <p>User Name</p>
            </div>
            <div className="p-3 rounded-lg shadow-lg bg-gradient-to-b from-[#FFF0C7] to-[#FFF6DE]">
              <textarea
                placeholder="Give Your Feedback"
                className="w-full h-24 p-2 bg-transparent rounded resize-none focus:outline-none"
              ></textarea>
            </div>
          </div>

          {/* Question Section */}
          <div className="mt-8">
            <h3 className="font-poppins text-[25px] md:text-[28px] lg:text-[31px] xl:text-[34px] pb-5 underline">
              Please Answer these Questions
            </h3>
            <div className="flex flex-col gap-4 lg:gap-7 w-full ">
              <div className="flex flex-col gap-2 p-5 lg:p-7 rounded-lg shadow-lg bg-gradient-to-b from-[#FFF0C7] to-[#FFF6DE]">
                <p>What do you like the most about the course?</p>
                <textarea
                  placeholder="Answer :"
                  className="w-full h-20 bg-transparent rounded resize-none focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="mt-10 text-center">
            <h3 className="text-[38px] font-poppins mb-4">
              Please give rating
            </h3>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-3xl ${
                    rating >= star ? "text-black" : "text-gray-400"
                  } hover:text-black transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleSubmit}
              className="py-2 px-4 bg-black text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
