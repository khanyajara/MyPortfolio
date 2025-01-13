import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  
} from "react-icons/di";
import { SiFirebase, SiHtml5, SiCss3,SiTypescript  } from "react-icons/si";


function Techstack() {
  const techSkills = [
    { icon: <SiHtml5 />, skill: "HTML", level: "Intermediate", description: "Used in multiple projects" },
    { icon: <SiCss3 />, skill: "CSS", level: "Advanced", description: "Styled responsive layouts" },
    { icon: <DiJavascript1 />, skill: "JavaScript", level: "Intermediate", description: "Built dynamic web applications" },
    { icon: <DiNodejs />, skill: "Node.js", level: "Intermediate", description: "" },
    { icon: <DiReact />, skill: "React", level: "Advanced", description: "" },
    { icon: <DiMongodb />, skill: "MongoDB", level: "Intermediate", description: "" },
    { icon: <DiGit />, skill: "Git", level: "Intermediate", description: "" },
    { icon: <SiFirebase />, skill: "Firebase", level: "Advanced", description: "" },
    { icon: <DiJava />, skill: "Java", level: "Intermediate", description: "" },
    { icon: <SiTypescript />, skill: "TypeScript", level: "Beginner",}
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techSkills.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{tech.icon}</div>
              <div className="flip-card-back">
                <h6>{tech.skill}</h6>
                <p>{tech.level}</p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
