import React from 'react';
import ReactPlayer from 'react-player'

import Header from '../components/Header';
import Video from '../components/Video';
import Scroller from '../components/Scroller';

const reel ={
  width: '100%',
  height: '80vh',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor: '#000',
}

const vid ={
  margin: '0 auto',
  textAlign: 'center',
}

const Home = () => (
  <>
  <Header />
  <div style={reel}>
    <ReactPlayer style={vid} url='https://www.youtube.com/watch?v=YtCy8ecMBeQ' playing loop controls width={'100%'} height={'80vh'}/>
  </div>
  <div className="page"> 
    <h1>Latest</h1>
    <Scroller />

    <h1>Evan Oneal</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <img src='https://via.placeholder.com/50x50'/>
    <img src='https://via.placeholder.com/50x50'/>
    <img src='https://via.placeholder.com/50x50'/>
  </div>
  </>
)

export default Home