import React, { useState } from 'react';
import './FAQPage.css'; 
import { useNavigate } from 'react-router-dom';

const FaqsPage = ({ faqs }) => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const toggleBox = (index) => {
    setExpanded(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
    <button className="back-btn" onClick={() => navigate('/')}>
  <span>&larr; </span> {}
  
</button>
      <div className="faq-container">
      <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div className={`faq-box ${expanded[index] ? 'expanded' : ''}`} key={index}>
            <div className="faq-header">
            <h3>{`0${index + 1}`}<br />{faq.question}</h3>
              <bu0tton className="toggle-btn" onClick={() => toggleBox(index)}>
                {expanded[index] ? '-' : '+'}
              </bu0tton>
            </div>
            {expanded[index] && (
              <div className="faq-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqsPage;
