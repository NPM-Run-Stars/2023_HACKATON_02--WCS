import React, { useState, useEffect } from "react";
import FaqsCard from "../components/FaqsCard";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/faqs`)
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="Bloc1">
      coucou
      {faqs.map((faq) => (
        <FaqsCard key={faq.id} faq={faq} />
      ))}
    </div>
  );
}

export default Faq;
