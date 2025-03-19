import { Row, Col } from "react-bootstrap";
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";

function Socialmedia() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://github.com/raghavcpp" target="_blank" rel="noopener noreferrer">
            <SiGithub />
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://x.com/Raghavcpp" target="_blank" rel="noopener noreferrer">
            <SiTwitter />
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.linkedin.com/in/raghav-cpp/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.instagram.com/raghav_reincarnation" target="_blank" rel="noopener noreferrer">
            <SiInstagram />
            </a>
        </Col>
    </Row>  
  );
}

export default Socialmedia;
