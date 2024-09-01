import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from './images/profile.jpg'; 

function Profile() {
    
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
          <Image 
            src={profileImage} 
            style={{ borderRadius: '10px', objectFit: 'cover', width: '200px', height: '200px' }} 
            fluid 
          />
        </Col>
        <Col xs={12} md={8} className="text-center text-md-left">
          <Card style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title>Hemraj Choudhary</Card.Title>
              <Card.Text>
                I’m a Python and Deep Learning developer with over three years of experience, specializing in PyTorch and computer vision.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
