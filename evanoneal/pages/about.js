import Header from '../components/Header';
import Footer from '../components/Footer';

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
  <Header />
  <div style={bio}>
    <p>Adobe Creative Suite  |  AVID Media Composer  |  DaVinci Resolve  |  On-Set Equipment</p>
  </div>
  <div className="page"> 

    <h1>Education</h1>
    <span style={{fontWeight: 'bold'}}>Indiana University, College of Arts and Sciences, Bloomington, IN</span> 
    <p>Bachelor of Arts in Media: Cinema and Media Arts - Studies and Production</p>   <p></p>


    <h1>Producer</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

    <h1>Director</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
   
    <h1>Editor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

    <h1>Credits</h1>
    <table >
      <tr>
        <th>Video</th>
        <th>Link</th> 
        <th>Role</th>
      </tr>
      <tr>
        <td>Video 1</td>
        <td>Link</td>
        <td>Producer</td>
      </tr>
      <tr>
        <td>Video2</td>
        <td>Link</td>
        <td>Director</td>
      </tr>
      <tr>
        <td>Video3</td>
        <td>Link</td>
        <td>Editor</td>
      </tr>
    </table>
  </div>
  <Footer />
  </>
  )
}