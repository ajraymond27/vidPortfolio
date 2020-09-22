import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


const bio ={
  width: '100%',
  backgroundColor: 'var(--base1)',
  color: 'var(--white)',
  padding: 20,
  textAlign: 'center',
  fontSize: '20pt',
}

export default function About () {
  return (
  <>

  <div className="page"> 
  <Header />
  <div style={bio}>
    <p>Adobe Creative Suite  |  AVID Media Composer  |  DaVinci Resolve  |  On-Set Equipment</p>
  </div>
    <h1>Education</h1>
      <Card >
        <Card.Body>
        <Card.Title>Indiana University, College of Arts and Sciences, Bloomington, IN</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Bachelor of Arts in Media: Cinema and Media Arts - Studies and Production</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">May 2020</Card.Subtitle>
        </Card.Body>
      </Card>

    <h1>Experience</h1>
    <CardDeck >
      <Experience />
    </CardDeck>
 

    </div>
  <Footer />
  </>
  )
}