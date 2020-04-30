import React from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

import latest from '../data/latest';
import Header from '../components/Header';
import VidScroller from '../components/VidScroller';
import Footer from '../components/Footer';

const reel ={
  width: '100%',
  height: '80vh',
  margin: '20px 0px 20px 0px',
  textAlign: 'center',
}

const vid ={
  margin: '0 auto',
  textAlign: 'center',
}

const button ={
  backgroundColor: 'var(--highlight )',
  padding: '10px 20px 10px 20px',
  border: '0px',
  borderRadius: '5px',
  float: 'right',
  color: 'var(--white)',
  width: '250px',
}

const evan ={
  width: '20%',
  margin: 10,
}

export default class Home extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      latest
    }
  }
  render() {
    return (
      <>
        <Header />
        <div style={reel}>
          <ReactPlayer style={vid} url='https://www.youtube.com/watch?v=YtCy8ecMBeQ' loop controls width={'80%'} height={'80vh'}/>
        </div>

        <div className="page"> 

          {this.state.latest.map((video) => (
            <VidScroller vids={video} />
          ))}
          <Link href="/work"><button style={button}>View All Work --> </button></Link>

          {/* <h1>Evan Oneal</h1>
          <div>
            <img src='/evan.jpg' style={evan} />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
          </div>
          <img src='https://via.placeholder.com/50x50'/>
          <img src='https://via.placeholder.com/50x50'/>
          <img src='https://via.placeholder.com/50x50'/><br/>
          <Link href="/about"><button style={button}>About Evan Oneal --> </button></Link> */}

        </div>
        <Footer />
      </>
    )
  }
}


const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
          color: var(--white);
        }
      `}</style>
    </a>
    
  )
}