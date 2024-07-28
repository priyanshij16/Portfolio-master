import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hospital Management"
              description="A Medical Platform where patient can book appointment from their place. Availability of specialist doctors, Bed Facility.
              Moreover 24/7 Ambulance "              
              ghLink="https://github.com/priyanshij16/hospital-manangement"
              demoLink="https://hospital-manangement.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={bitsOfCode}
              //isBlog={false}
              title="Api Authenticator"
              description="A Node.js API that is going to handle Authentication in any application we want to use it in using JWT and to hash passwords and JWT to check for private routes."              
              ghLink="https://github.com/priyanshij16/Api_Authentication_JWT"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student CRUD"
              description="A Create Read Update Delete(CRUD) application which contains 2 model for student and their respective address"
              ghLink="https://github.com/priyanshij16/final_crud_student"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shopping Cart"
              description="Implemented a shopping cart that manages all items and allow items to get added to the cart and store it. Also calculate the total amount of User"              
              ghLink="https://github.com/priyanshij16/Shopping-cart-app-"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
