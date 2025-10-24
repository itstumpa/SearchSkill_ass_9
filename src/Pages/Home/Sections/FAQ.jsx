import FAQs from "../../../assets/FAQ.png";
import React from "react";
// import faqData from "../../../..public/faq.json"; 
import faqData from "../../../../public/faq.json"

const FAQ = () => {
  return (
    <div className="parent flex gap-40 max-w-10/12 mx-auto justify-center my-20 items-center">



      <div>
        <img className="w-[400px] h-[400px] lg:flex hidden" src={FAQs} alt="" />
      </div>



      <div>

      
<div className="flex flex-col items-center gap-4 my-12">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="bg-base-100 w-[700px] border-base-300 collapse border rounded-lg"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-black/90 text-primary-content peer-checked:bg-violet-600 peer-checked:text-secondary-content font-medium">
            {faq.question}
          </div>
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
