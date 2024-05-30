import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const SecondRow = () => {
  return (
    <Container>
      <Row className="pt-8 pb-8">
        <Col>
          <div className="zoom-out" style={{ fontSize: '3.5rem', fontWeight: 700 }}>
            Long Lasting Mufa Perfume: Experience Freshness All Day
          </div>
        </Col>
        <Col>
          <img
            className="zoom-out"
            src="red-label-mufa-perfume.jpg"
            alt="Descriptive Alt Text"
            style={{ width: '535px', height: '321px' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondRow;
