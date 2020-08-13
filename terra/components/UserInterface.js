import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Router from 'next/router';

const userInterface = () => {
  return (
    <div className="center">
      <h2 className="jumbo-title">Where would you like to go?</h2>
      <div className="layout-container">
        <Row>
          <Col>
            <div className="left-btn-container">
              <div>
                <button className="img-btn" onClick={() => Router.push('/beach')}><img src="/img/beach/beach.png" alt="beach image"/></button>
                <p>Beach</p>
              </div>
              <div>
                <button className="img-btn" onClick={() => Router.push('/city')}><img src="/img/city/city.png" /></button>
                <p>City</p>
              </div>
              <div>
                <button className="img-btn" onClick={() => Router.push('/desert')}><img src="/img/desert/desert.png" /></button>
                <p>Desert</p>
              </div>
            </div>
          </Col>
          <Col>
              <div className="jumbo">
                  <div className="jumbo-content">
                    <img className="main-img" src="/img/FullBeachScene.png" alt="full beach scene" />
                  </div>
              </div>
          </Col>
          <Col>
            <div className="right-btn-container">
              <div>
                <button className="img-btn" onClick={() => Router.push('/jungle')}><img src="/img/jungle/jungle.png" /></button>
                <p>Jungle</p>
              </div>
              <div>
                <button className="img-btn" onClick={() => Router.push('/ocean')}><img src="/img/ocean/ocean.png" /></button>
                <p>Ocean</p>
              </div>
              <div>
                <button className="img-btn" onClick={() => Router.push('/forest')}><img src="/img/forest/forest.png" /></button>
                <p>Forest</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{`
        .center {
          text-align: center;
        }
        .jumbo-title {
        }
        .layout-container {
          min-width: 900px;
          max-width: 1920px;
          min-height: 500px;
          max-height: 800px;
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
          margin-left: 100px;
          margin-right: 100px;
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
          max-width: 100%;
          max-height: 100%;
        }
      `}</style>
    </div>
  );
};

export default userInterface;
