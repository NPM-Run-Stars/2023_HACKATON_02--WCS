import React, { useState, useEffect } from "react";
import FaqsCard from "../../../components/FaqsCard/FaqsCard";
import connexion from "../../../services/connexion";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  const getFaq = async () => {
    try {
      const faq = await connexion.get(`/faqs`);
      setFaqs(faq);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div className="Bloc1">
      {faqs.map((faq) => (
        <FaqsCard key={faq.id} faq={faq} />
      ))}
    </div>
  );
}

export default Faq;
