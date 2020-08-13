import React from 'react'
import Nav from '../../components/Nav'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Router from 'next/router';
import Link from 'next/link';

const aboutPage = () => {
  return (
    <div>
      <Nav />
      <div className="about">
        <h1 className="aboutTitle">About Team</h1>
        <h5><Link href="/" passHref><a>Home</a></Link></h5>
        <div className="aboutPage">
          <div className="member">
            <h3>Shae [Naomi Benham] </h3>
            <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013U9V5LAZ-58229599c17f-512" />
            <h5>Designer</h5>
          </div>
          <div className="member">
            <h3>David Kim</h3>
            <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013VNL55NW-4021bceade11-512" />
            <h5>Designer</h5>
          </div>
          <div className="member">
            <h3>Braidon Hobzek</h3>
            <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013EJURLAG-e42e97c0d7ae-512" />
            <h5>Designer</h5>
          </div>
          <div className="member">
            <h3>Jameson Anker Aardalen</h3>
            <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013AC1U2LD-5b3b451b0ba7-512" />
            <h5>Developer</h5>
          </div>
          <div className="member">
            <h3>Noa Kim</h3>
            <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013K9KBAGM-99450e7d8a79-512" />
            <h5>Developer</h5>
          </div>
          <div className="member">
            <h3>Minh Nguyen</h3>
            <img className="aboutImg" src="https://ca.slack-edge.com/T0351JZQ0-U013SS45XPW-6b458202f6f4-512" />
            <h5>Developer</h5>
          </div>
        </div>
        <style jsx>{`
          .about {
            width: 100%;
            text-align: center;
            margin: 0 auto;
          }
          
          .aboutPage {
            display: flex;
            text-align: center;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
          
          .aboutImg {
            width: 400px;
            height: 400px;
            margin: 30px;
          }
          
          .member {
            width: 400px;
            height: 500px;
            text-align: center;
            margin: 50px;
          }
        `}</style>
      </div>
    </div>
  )
}

export default aboutPage