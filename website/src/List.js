import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from './YouTube';
import Projects from './Projects';
import Blogs from './Blogs';
import Experiences from './Experiences';

function Lists() {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <YouTube expanded={expanded === 'YouTube'} handleExpand={() => handleExpand('YouTube')} />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Projects expanded={expanded === 'Projects'} handleExpand={() => handleExpand('Projects')} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <Blogs expanded={expanded === 'Blogs'} handleExpand={() => handleExpand('Blogs')} />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Experiences expanded={expanded === 'Experiences'} handleExpand={() => handleExpand('Experiences')} />
        </Col>
      </Row>
    </Container>
  );
}

export default Lists;
