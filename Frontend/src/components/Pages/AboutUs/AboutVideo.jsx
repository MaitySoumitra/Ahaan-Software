import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutVideo.css";

const AboutVideo = () => {
  return (
    <section className="about-video-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="video-wrapper shadow">
              <video
                className="about-video"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ahaanmedia.com/ahaanwebsite/video/about-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutVideo;