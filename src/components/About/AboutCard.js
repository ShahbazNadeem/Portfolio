import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahbaz Nadeem </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay.
            <br /> */}
            I have completed <span className="purple">Graduation</span> in (BSSE) <span className="purple">Bachelors of Science in Software Engineering </span>
            from <span className="purple">Lahore Garrison University</span>
            <br />
            <br />
            I did <span className="purple">Full stact Development</span> from PNY Trainings in 2023 
            <br />
            After That I did <span className="purple">internships</span> in :
            <br />
            1 : Era Flip (Aug 2023-Oct 2023)
            <br />
            2 : Excellence Code Solution (Jan 2024-Mar 2024)
            <br />
            <br />
            Apart from coding, some other <span className="purple">activities</span> that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports (Badminton)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shahbaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
