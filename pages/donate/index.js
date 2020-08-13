import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from '../../components/Nav';
const donate = () => {
  return (
    <div className="donate-pg">
      <Nav />
      <Container>
        <div className="container">
          <br />
          <h1 className="donate-title">Donate</h1>
          <br />
          <p>these are pages you can get resources on environment/donate to causes that support this</p>
        </div>
      </Container>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
          * {
            font-family: 'Montserrat', sans-serif;
            background-color: #95ac98;
          }
          .container {
            text-align: center;
          }
          .donate-title {
            font-family: 'Fugaz One', cursive;;
          }
          .donate-pg {
            background-color: #95ac98;
            width: 100vw;
            height: 100vh;
          }
        `}</style>
    </div>
  );
};
export default donate;