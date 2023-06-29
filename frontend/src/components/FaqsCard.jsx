import React from "react";

function FaqsCard({ faq }) {
  return (
    <div>
      <button type="submit">{faq.question}</button>
      <div className="reponse">{faq.answer}</div>
    </div>
  );
}

export default FaqsCard;
