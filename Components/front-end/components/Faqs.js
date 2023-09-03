import { memo, useState } from "react";
import Image from 'next/image';
import v from "../../../Assets/openv.svg";
import v1 from "../../../Assets/closev.svg";
import useFaqs from "../hooks/useFaqs.ts";

// eslint-disable-next-line react/display-name
const Faqs = memo(() => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { faqsQs } = useFaqs();
  console.log(faqsQs)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="faq-container">
      {faqsQs && faqsQs.map((faq, index) => (
        <div key={index} className="faq">
          <div className="Question" onClick={() => handleClick(index)}>
            <h6>{faq.question}</h6>
            <div className="icons-dropdown">
              <span>
                {(activeIndex === index) ? <Image src={v1} alt='drop' /> : (<Image src={v} alt='dropd' />)}</span>
            </div>

          </div>
          {activeIndex === index && (
            <div className="Answer">
              <span>
                {faq.answer}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

})
export default Faqs;