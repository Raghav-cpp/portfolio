import { Row, Col } from "react-bootstrap";
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";

function Socialmedia() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://github.com/raghavcpp" target="_blank" rel="noopener noreferrer"style={{ textDecoration: "none", color: "inherit" }}>
            <SiGithub />
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://x.com/Raghavcpp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <SiTwitter />
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.linkedin.com/in/raghav-cpp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <SiLinkedin />
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.instagram.com/raghav_reincarnation" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <SiInstagram />
            </a>
        </Col>
    </Row>  
  );
}

export default Socialmedia;
