import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import UserInterface from '../components/UserInterface';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <Nav />
      <UserInterface />
      <style jsx>{`
      .jumbo {
        text-align: center;
      }
    `}</style>
    </div>

  );
}
