import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { Spinner } from "react-bootstrap"; 


function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/khanyajara/repos', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching repos:', error);
        setLoading(false);
      });
  }, []);
  

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {repos.map((repo) => (
              <Col key={repo.id} md={4} className="project-card">
                <ProjectCard
                  imgPath={repo.owner.avatar_url} 
                  isBlog={false}
                  title={repo.name}
                  description={repo.description || "No description available"}
                  ghLink={repo.html_url}
                  demoLink={repo.homepage || "#"}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
