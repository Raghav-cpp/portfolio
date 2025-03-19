import { Row, Col } from "react-bootstrap";
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";

function Socialmedia() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} href="https://github.com/raghavcpp" className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} href="https://x.com/Raghavcpp" className="tech-icons">
        <SiTwitter />
      </Col>
      <Col xs={4} md={2} href="https://www.linkedin.com/in/raghav-cpp/" className="tech-icons">
        <SiLinkedin />
      </Col>
      <Col xs={4} md={2} href="https://www.instagram.com/raghav_reincarnation" className="tech-icons">
        <SiInstagram />
      </Col>
    </Row>
  );
}

export default Socialmedia;
