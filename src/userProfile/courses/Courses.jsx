import React from "react";

const Courses = () => {
  return (
    <div className="w-full font-urbanist bg-white">
      <div className="py-16 px-6">
        <div className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-left text-gray-800 pb-8">
          <p className="underline">Courses</p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200">
          {/* Added scrollbar classes for thin, black thumb and light track */}
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-row items-center justify-between">
              <div className="font-poppins text-2xl md:text-3xl lg:text-4xl font-light text-gray-700">
                <p>Quantum Mechanics</p>
              </div>
              <div className="font-urbanist text-lg md:text-xl lg:text-2xl text-gray-800">
                <p>$4 per hour</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Enroll:</span>
                <p>2-2-2024</p>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-semibold">Category:</span>
                <p>Physics</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-green-500">
                <i className="fa-solid fa-check"></i>
                <p>Completed</p>
              </div>
              <div>
                <button className="py-3 px-5 bg-black text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-gray-800 transition-all">
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
          {/* Repeat the course card structure for other cards */}
        </div>
      </div>
    </div>
  );
};

export default Courses;
