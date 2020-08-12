import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

const userInterface = () => {
  return (
    <div className="center">
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <Jumbotron>
            <div className="jumbo">
              <h1>Welcome to Terra</h1>
              <p>
                This is a simple environmental application, built to help
                educate the youth
                <br />
                about the importance of how humans can negatively impact our
                planet.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </div>
          </Jumbotron>
        </Col>
        <Col>3 of 3</Col>
      </Row>
      <style jsx>{`
        .center {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default userInterface;
