import React, { useState } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Router from 'next/router';
import Link from 'next/link';

const userInterface = () => {
  const [imageLink, setImageLink] = useState('/img/earth.jpg');
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = [
    '/img/beach-00.png',
    '/img/beach-01.png',
    '/img/shark-00.png',
    '/img/shark-01.png',
    '/img/shark-02.png',
    '/img/seastar-00.png',
    '/img/seastar-01.png',
    '/img/seastar-02.png',
    '/img/crab-00.png',
    '/img/crab-01.png',
    '/img/crab-02.png',
    '/img/bottle-00.png',
    '/img/bottle-01.png',
    '/img/bottle-02.png',
    '/img/seaturtle-00.png',
    '/img/seaturtle-01.png',
    '/img/seaturtle-02.png',
    '/img/seaturtle-03.png',
  ];

  const imageClick = (e) => {
    e.preventDefault();
    if (currentIndex > imageArray.length) {
      console.log(currentIndex > imageArray.length);
      setCurrentIndex(0);
      setImageLink(imageArray[0]);
    } else {
      setImageLink(imageArray[currentIndex]);
      console.log(currentIndex);
    }
  };

  const incrementImage = (e) => {
    e.preventDefault();
    if (currentIndex >= imageArray.length) {
      console.log(currentIndex > imageArray.length);
      setCurrentIndex(0);
      setImageLink(imageArray[0]);
    } else {
      setImageLink(imageArray[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const decrementImage = (e) => {
    e.preventDefault();
    if (currentIndex -1 === -1) {
      setCurrentIndex(imageArray.length - 1);
      setImageLink(imageArray[0]);
    } else {
      setCurrentIndex(currentIndex - 1);
      setImageLink(imageArray[currentIndex]);
    }
  };

  return (
    <div>
      <div className="center">
        <h2 className="jumbo-title">Where would you like to go?</h2>
        <h5><Link href="/" passHref><a>Home</a></Link></h5>
        <div className="layout-container">
          <Row>
            <Col>
              <div className="left-btn-container">
                <div>
                  <button className="img-btn" onClick={(e) => imageClick(e)}>
                    <img src="/img/beach/beach.png" alt="beach image" />
                  </button>
                  <p>Beach</p>
                </div>
                <div>
                  <button
                    className="img-btn"
                    onClick={() => Router.push('/city')}
                  >
                    <img src="/img/city/city.png" />
                  </button>
                  <p>City</p>
                </div>
                <div>
                  <button
                    className="img-btn"
                    onClick={() => Router.push('/desert')}
                  >
                    <img src="/img/desert/desert.png" />
                  </button>
                  <p>Desert</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="jumbo">
                <div className="jumbo-content">
                  <img
                    className="main-img"
                    src={`${imageLink}`}
                    alt="full beach scene"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="right-btn-container">
                <div>
                  <button
                    className="img-btn"
                    onClick={() => Router.push('/jungle')}
                  >
                    <img src="/img/jungle/jungle.png" />
                  </button>
                  <p>Jungle</p>
                </div>
                <div>
                  <button
                    className="img-btn"
                    onClick={() => Router.push('/ocean')}
                  >
                    <img src="/img/ocean/ocean.png" />
                  </button>
                  <p>Ocean</p>
                </div>
                <div>
                  <button
                    className="img-btn"
                    onClick={() => Router.push('/forest')}
                  >
                    <img src="/img/forest/forest.png" />
                  </button>
                  <p>Forest</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="button-set">
          <Row>
            <Col>
              <Button onClick={(e) => decrementImage(e)} variant="danger">Back</Button>{' '}
            </Col>
            <Col>
              <Button onClick={(e) => incrementImage(e)} variant="success">Next</Button>{' '}
            </Col>
          </Row>
        </div>
        <style jsx>{`
          .center {
            text-align: center;
            background-color: #95ac98;
            font: Montserrat;
          }
          .jumbo-title {
          }
          .layout-container {
            display: flex;
            justify-content: space-around;
          }
          .left-btn-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 800px;
          }
          .jumbo {
            height: 800px;
            width: 1100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 20px solid rgb(88, 80, 73);
            border-radius: 50px;
            background-color: black;
          }
          .right-btn-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 800px;
          }
          .img-btn {
            border-style: none;
            padding: 0;
            margin: 0;
            border-radius: 15px;
          }
          .main-img {
            max-width: 1060px;
            max-height: 700px;
          }

          .button-set {
            margin: auto;
            margin-top: 20px;
            max-width: 600px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default userInterface;
