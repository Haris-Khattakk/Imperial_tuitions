import React, { useEffect, useState } from "react";
import API_URLS from '../../../config/Config';
import axios from "axios";

const Messages = () => {

  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state to handle API call status
  const [error, setError] = useState(null); // Add error state to capture any errors

  const getDetails = async () => {
    try {
      // Add logging for API URL and response data
      console.log("Fetching data from:", API_URLS.getInfo);
      const response = await axios.get(API_URLS.getInfo, { withCredentials: true });
      
      if (response.status === 200) {
        setUserInfo(response.data); // Update state with the fetched data
        console.log(response.data)
        setLoading(false); // Set loading to false when data is fetched
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      setError("Failed to fetch data. Please try again later.");
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    getDetails();
  }, []);


  return (
    <div className="w-full bg-white">
      <div className="py-16 px-6">
        <div className="font-poppins text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-800 pb-8">
          <p className="underline">Messages</p>
        </div>

        <div className="flex font-urbanist flex-col gap-8 lg:gap-10 scrollbar-custom overflow-y-auto max-h-screen">
          
          {
            userInfo.map((info)=>{
              {
                return info.inquiries?.map((inq)=> (
                  <div className="flex flex-col p-6 lg:p-8 bg-[#FFF6DE] rounded-lg shadow-xl hover:shadow-2xl transition-all">
                    <div className="font-poppins text-xl md:text-2xl lg:text-3xl font-normal text-gray-700">
                      <p>{inq.inquiry}</p>
                    </div>
                    <div className="font-poppins md:text-lg text-md text-gray-800 mt-4">
                      <p>
                        <span className="font-light">Answer: </span>
                        {inq.reply}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-5 text-lg md:text-xl">
                      <div className={`flex flex-row items-center gap-2 ${inq.reply != null ? "text-green-600": "text-red-600"}`}>
                        <p>{inq.reply != null? "Answered": "Not Yet Answered"}</p>
                      </div>
                      <div className="inline-block font-poppins">
                        <i className="material-icons text-2xl cursor-pointer hover:text-blue-500 transition-all">
                          edit
                        </i>
                      </div>
                    </div>
                  </div>
                ))
              }
            })
          }
          {/* Repeat similar cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Messages;
