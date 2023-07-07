import { Container, Row, Col } from "react-bootstrap";
import { IoCopyOutline } from "react-icons/io5";

import "../App.css";
const ProjectDemo = () => {
  const email1 = "misgana21son@gmail.com";
  const email2 = "razocharon@gamil.com";

  return (
    <div className="app-container">
      <header className="text-center">
        <h1>VR Project</h1>
      </header>
      <Container>
        <Row>
          <Col md={8}>
            <section>
              <h2>Interactive VR environment for ACT Demo Video</h2>
              <p>
                The primary aim of this project is to develop a virtual
                environment that offers an interactive space to foster the
                acceptance of negative aspects of life (i.e. chronic low back
                pain) as part of experience implementing the "Garden" metaphor
                from ACT. This application will be further used in a the other
                stages of the "CLEVER" project.{" "}
              </p>
            </section>
          </Col>
        </Row>
        <Row className="video-row">
          <Col>
            <h2>First person perspective</h2>
            <section className="video-section">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/gGrgsg204jU"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </Col>
          <Col>
            <h2>Third person perspective</h2>
            <section className="video-section">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/NiPxusee988"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </Col>
        </Row>
        <div>
          <p>
            You can email us at{" "}
            <a href={`mailto:${email1}`} style={{ color: "skyblue" }}>
              {email1}
            </a>{" "}
            :{" "}
            <button
              onClick={() => navigator.clipboard.writeText(email1)}
              style={{ background: "gray" }}
            >
              <IoCopyOutline /> copy
            </button>
            {"   "} Or{"    "}
            <a href={`mailto:${email2}`} style={{ color: "skyblue" }}>
              {email2}
            </a>
            <button
              style={{ background: "gray" }}
              onClick={() => navigator.clipboard.writeText(email2)}
            >
              <IoCopyOutline /> copy
            </button>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDemo;
