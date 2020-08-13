import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from '../../components/Nav';
const resources = () => {
  return (
    <div className="resource-pg">
      <Nav />
      <Container>
        <div className="container">
          <br />
          <h1 className="resources-title">Resources</h1>
          <br />
          <p>California State Parks Foundation is the only statewide independent nonprofit organization dedicated to protecting, enhancing and advocating for California's magnificent state parks. They have volunteer opportunities through their Park Champions program.</p>
          <a href="http://sfbaywatertrail.org/get-involved/volunteer/" target="__blank"><Button variant="primary">Volunteer in SF Bay Area</Button></a>
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
          .resource-pg {
            background-color: #95ac98;
            width: 100vw;
            height: 100vh;
          }
          .resources-title {
            font-family: 'Fugaz One', cursive;
          }
        `}</style>
    </div>
  );
};
export default resources;
