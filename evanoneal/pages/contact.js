import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'


const icon={
  margin: '50px',
}

const Contact = () => (
  <>

  <Header />
  <div className="page"> 
  <h1>Contact</h1>
    <Card >
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">
        <FontAwesomeIcon icon={faEnvelope} stye={icon}/>
        <span>         evanjoneal@gmail.com</span>
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        <FontAwesomeIcon icon={faMobileAlt} stye={icon}/>
        <span>      (317) 556-5848</span>
      </Card.Subtitle>
      </Card.Body>
    </Card>

    <h1>Connect</h1>
    <Card >
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">
        <FontAwesomeIcon icon={faEnvelope} stye={icon}/>
        <span>         evanjoneal@gmail.com</span>
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        <FontAwesomeIcon icon={faMobileAlt} stye={icon}/>
        <span>      (317) 556-5848</span>
      </Card.Subtitle>
      </Card.Body>
    </Card>
 
    {/* <h1>Connect</h1>
    <FontAwesomeIcon icon={faTv}/>
    <span>LinkedIn Link</span>
    
    <FontAwesomeIcon icon={faTv}/>
    <span>Instagram Link</span>

    <FontAwesomeIcon icon={faTv}/>
    <span>Facebook Link</span> */}
  </div>
  <Footer />

  </>
)

export default Contact
