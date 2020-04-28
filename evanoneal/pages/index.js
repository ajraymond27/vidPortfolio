import React from 'react';
import Header from '../components/Header';
import Video from '../components/Video';
import Scroller from '../components/Scroller';

const feature ={
  width: '100%',
  backgroundColor: 'grey',
  padding: '10px'
}
const featuretext={
  float: 'right',
  width: '40vw',
  textAlign: 'center',
  padding: 25,
}
const featurevid ={
  width: '50vw',
  height: 'auto',
  textAlign: 'right',
}

const Home = () => (
  <div className="page"> 
    <Header />

    <div style={feature}>
      <div style={featuretext}>
        <h2>Matters in the End</h2>
        <p>This movie is about some stuff where things happen and music plays in the background. Very cool stuff</p>
      </div>
      <div style={featurevid}>
        <Video />
      </div>
    </div>
    <h1>Latest</h1>
    <img src='https://via.placeholder.com/400x200'/>
    <img src='https://via.placeholder.com/400x200'/>
    <img src='https://via.placeholder.com/400x200'/>

    <h1>Evan Oneal</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <img src='https://via.placeholder.com/50x50'/>
    <img src='https://via.placeholder.com/50x50'/>
    <img src='https://via.placeholder.com/50x50'/>
  </div>
)

export default Home