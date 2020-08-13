import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from '../../components/Nav';

const resources = () => {
  return (
    <div>
      <Nav />
      <Container>
        <div className="container">
          <br />
          <h1>Resources</h1>
          <br />
          <p>California State Parks Foundation is the only statewide independent nonprofit organization dedicated to protecting, enhancing and advocating for California’s magnificent state parks. They have volunteer opportunities through their Park Champions program.</p>
          <a href="http://sfbaywatertrail.org/get-involved/volunteer/" target="__blank"><Button variant="primary">Volunteer in SF Bay Area</Button></a>
        </div>
        <style jsx>{`
          .container {
            text-align: center;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default resources;
