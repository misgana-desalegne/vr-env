import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
const ProjectClever = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    // event.preventDefault();
    const newComment = { name, comment };
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
            <section className="video-section">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/b1VAzVa4szc"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="comment-section">
              <h2>Comments</h2>
              {comments.map((comment, index) => (
                <div key={index}>
                  {/* <h5>{comment.name}</h5>
                  <p>{comment.comment}</p> */}
                </div>
              ))}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group>
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

export default ProjectClever;
