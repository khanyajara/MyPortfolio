import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Khanya Jara</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
                            <a
                              href="https://github.com/khanyajara"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour  home-social-icons"
                            >
                              <AiFillGithub />
                            </a>
                          </li>
                          
                          <li className="social-icons">
                            <a
                              href="https://www.linkedin.com/in/khanya-motsage-4a5249339/"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour  home-social-icons"
                            >
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li className="social-icons">
                            <a
                              href="https://www.instagram.com/just_finn___/"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour home-social-icons"
                            >
                              <AiFillInstagram />
                            </a>
                          </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
