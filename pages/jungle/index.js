import React from 'react'
import Nav from '../../components/Nav'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Router from 'next/router';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

const mountainsPage = () => {
  return (
    <div className="center">
      <br />
      <h2>Where would you like to go?</h2>
      <h5><Link href="/" passHref><a>Home</a></Link></h5>
      <br />
      <div className="layout-container">
        <Row>
          <Col>
          <div>
              <button onClick={() => Router.push('/beach')}><img src="/img/beach/beach.png" /></button>
              <p>Beach</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/city')}><img src="/img/city/city.png" /></button>
              <p>City</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/desert')}><img src="/img/desert/desert.png" /></button>
              <p>Desert</p>
            </div>
          </Col>
          <Col xs={6}>
            <Jumbotron>
              <div className="jumbo">
                <div className="jumbo-content">
                  <h1>You are in the Jungle</h1>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-600"
                        src="https://picsum.photos/600/600"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-600"
                        src="https://picsum.photos/600/600"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-600"
                        src="https://picsum.photos/600/600"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Jumbotron>
          </Col>
          <Col>
          <div>
              <button onClick={() => Router.push('/jungle')}><img src="/img/jungle/jungle.png" /></button>
              <p>Jungle</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/ocean')}><img src="/img/ocean/ocean.png" /></button>
              <p>Ocean</p>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <button onClick={() => Router.push('/forest')}><img src="/img/forest/forest.png" /></button>
              <p>Forest</p>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{`
        .center {
          text-align: center;
        }
        .jumbo {
          width: 1112px;
          height: 700px;
        }
        .jumbo-content {
          position: relative;
          left: 100px;
          top: 20px;
          background-color: black;
          heigh: 700px;
          width: 600px;
          color: white;
        }
        .layout-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};


export default mountainsPage