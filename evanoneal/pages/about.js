import Header from '../components/Header';
import Footer from '../components/Footer';

const bio ={
  width: '100%',
  backgroundColor: 'var(--base1)',
  color: 'var(--white)',
  padding: 20,
}

export default function About () {
  return (
  <>
  <Header />
  <div style={bio}>
    <h1 style={{color: 'var(--white'}}>About Me</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>
  <div className="page"> 

    <h1>Producer</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <img src='https://via.placeholder.com/400x200'/>

    <h1>Director</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <img src='https://via.placeholder.com/400x200'/>
   
    <h1>Editor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <img src='https://via.placeholder.com/400x200'/>

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