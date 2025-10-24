import React, { useEffect, useState } from "react";
import "animate.css";
import FAQs from "../../../assets/FAQ.png";
import faqData from "../../../../public/faq.json";

const FAQ = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="parent flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-50 max-w-6xl mx-auto px-4 my-16">
      
      {/* Image Section */}
      <div className="hidden sm:flex justify-center lg:justify-end w-full lg:w-1/2">
        <img
          className="w-[300px] h-[300px]  lg:w-[450px] lg:h-[450px] object-contain"
          src={FAQs}
          alt=""
        />
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <div className="flex flex-col items-center gap-4 my-12 w-full">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-base-100 w-full sm:w-[90%] md:w-[500px] lg:w-[700px] border-base-300 collapse border rounded-lg"
            >
              <input type="checkbox" className="peer" />

              {/* Animated Question */}
              <div
                style={{ animationDuration: "1.2s" }}
                className={`collapse-title bg-black/90 text-primary-content font-medium peer-checked:bg-violet-600 peer-checked:text-secondary-content ${
                  animate ? "animate__animated animate__lightSpeedInRight" : ""
                }`}
              >
                {faq.question}
              </div>

              {/* Answer Section */}
              <div className="collapse-content bg-violet-600 text-primary-content peer-checked:bg-violet-600 peer-checked:text-secondary-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
