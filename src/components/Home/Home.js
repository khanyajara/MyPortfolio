import React from "react";
import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Nav from "react-bootstrap/Nav";
import { CgFileDocument } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import pdf from "../../Assets/My Resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "react-bootstrap/Button";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {


  const [expand, updateExpanded] = useState(false);
  const navigate= useNavigate()


const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);



  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Khanya Jara</strong>
                
              </h1>
           

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
             



            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
