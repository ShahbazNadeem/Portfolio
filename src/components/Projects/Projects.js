import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import excellencetraining from "../../Assets/Projects/excellencetraining.PNG";
import medicalpos from "../../Assets/Projects/medicalpos.PNG";
import career_grow from "../../Assets/Projects/career_grow.PNG";
import madni_paper from "../../Assets/Projects/madni_paper.PNG";
import paper_suppliers from "../../Assets/Projects/paper_suppliers.PNG";
import a3hmir from "../../Assets/Projects/a3hmir.PNG";
import newspic from "../../Assets/Projects/newspic.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <p style={{ color: "white" }}>
          Projects I've worked on recently will be available soon.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newspic}
              isBlog={false}
              title="News Coming Soon!"
              description="A MERN Stack Project with admin dashboard.
              It is web-based platform that allows users to search, and order products.
              admin can manage news and blogs.It allows users to download PDF's of latest news.
              Users can see useful links, subjects, topics and videos related to subtopics. 
              All of this can be created, edited, deleted and viewed by the admin.
              Providing a convenient and efficient solution for people who need the best online 
              news experience."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalpos}
              isBlog={false}
              title="Medical POS Coming Soon!"
              description="A MERN stack application with a Dashboard.A user can order products. 
              Admin can manage products, orders, reviews, and users. Providing a convenient and 
              efficient solution for people who need the best online medical shopping experience.
              With JWT authentication and the becryption of the password is make this more secure and 
              efficient at the same time."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://jobshsswalay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={career_grow}
              isBlog={false}
              title="Career Grow"
              description="A React JS application for creating and managing jobs. It is Frontend 
              Project where you can apply for different Jobs and find more by using filter which 
              make it more enhanced"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://careergrownews.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madni_paper}
              isBlog={false}
              title="Madni Paper"
              description="Marketing website for Madni Paper Group built with React JS. All pages are fully responsive and optimised for mobile viewing."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://madnipaperlahore.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper_suppliers}
              isBlog={false}
              title="Paper Suppliers"
              description="A React JS based portfolio website to showcase their products and market it under 
              different industries"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://paper-supply.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a3hmir}
              isBlog={false}
              title="A3HMIR Global Corporation"
              description="A porfolio static wedsite to show the products"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://a3hmirglobalcorporation.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excellencetraining}
              isBlog={false}
              title="Excellence Training"
              description="A demo React JS static Website for a teaching and training institue."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://excellencetraining.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
