import Header from '../components/Header';
import Footer from '../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'


const Contact = () => (
  <>

  <Header />
  <div className="page"> 
    <h1>Contact</h1>
    <FontAwesomeIcon icon={faTv}/>
    <span>evanjoneal@gmail.com</span>
    
    <FontAwesomeIcon icon={faTv}/>
    <span>555-555-5555</span>
 
    <h1>Connect</h1>
    <FontAwesomeIcon icon={faTv}/>
    <span>LinkedIn Link</span>
    
    <FontAwesomeIcon icon={faTv}/>
    <span>Instagram Link</span>

    <FontAwesomeIcon icon={faTv}/>
    <span>Facebook Link</span>
  </div>
  <Footer />

  </>
)

export default Contact
