import React, { useState } from "react";
import "./FaqsCard.scss";
import { BsArrowReturnRight } from "react-icons/bs";

function FaqsCard({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "open" : null}>
      <button type="button" className="question" onClick={() => setOpen(!open)}>
        {faq.question}
      </button>
      {open && (
        <div className="answer" id="reponse">
          <BsArrowReturnRight /> {faq.answer}
        </div>
      )}
    </div>
  );
}

export default FaqsCard;
