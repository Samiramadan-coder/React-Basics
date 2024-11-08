import "../styles.css";

import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card">
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="icon">{isActive ? "-" : "+"}</div>
      </div>

      <div className="content">{isActive && <p>{content}</p>}</div>
    </section>
  );
};

export default Accordion;
