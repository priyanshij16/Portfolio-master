import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Priyanshi Jain </span>
            from <span className="purple">New Delhi, India.</span>
            <br />
           I completed my high school education from Queen Mary's Tis Hazari.  
            <br />
            I have completed BTech at Ipec, Sahibabad.
            <br />
          Currently I'm employed as a Software Developer at Innobit Systems(Start-Up).
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <footer className="blockquote-footer">PriyanshiJain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
