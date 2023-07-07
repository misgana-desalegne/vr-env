import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
const ProjectDemo = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  //const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    // event.preventDefault();
    //const newComment = { name, comment };
    //setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

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
        <Row className="comment-row">
          <Col>
            <section className="comment-section">
              <h2 className="text-center">Comments</h2>
              <div className="comments-container">
                {/* {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <h3>{comment.name}</h3>
                      <p>{comment.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No comments yet.</p>
                )} */}
              </div>
              <Form onSubmit={handleSubmit} className="comment-form">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group controlId="formComment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter your comment"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDemo;
