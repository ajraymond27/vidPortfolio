import React from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

import latest from '../data/latest';
import Header from '../components/Header';
import VidScroller from '../components/VidScroller';

const reel ={
  width: '100%',
  height: '70vh',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor: 'var(--shadow)',
}

const vid ={
  margin: '0 auto',
  textAlign: 'center',
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
          <ReactPlayer style={vid} url='https://www.youtube.com/watch?v=YtCy8ecMBeQ' loop controls width={'80%'} height={'70vh'}/>
        </div>

        <div className="page"> 
          {this.state.latest.map((video) => (
            <VidScroller vids={video} />
          ))}
          <button><Link href="/work">View All Work --></Link></button>

          <h1>Evan Oneal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <img src='https://via.placeholder.com/50x50'/>
          <img src='https://via.placeholder.com/50x50'/>
          <img src='https://via.placeholder.com/50x50'/><br/>
          <button><Link href="/about">About Evan Oneal --></Link></button>
        </div>
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
        }
      `}</style>
    </a>
  )
}