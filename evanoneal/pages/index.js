import React from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'

// import latest from '../data/latest';
import Header from '../components/Header';
import VidScroller from '../components/VidScroller';
import Footer from '../components/Footer';

import videos from '../data/videos';


// const reel ={
//   width: "100%",
//   height: '50vh',
//   margin: '0px 0px 20px 0px',
//   textAlign: 'center',
// }

const vid ={
  margin: '0 auto',
  textAlign: 'center',
  height: '80vh',
}

const button ={
  backgroundColor: 'var(--base1)',
  padding: '10px 20px 10px 20px',
  border: '0px',
  borderRadius: '5px',
  float: 'right',
  color: 'var(--white)',
  width: '250px',
}

// const evan ={
//   width: '100%',
//   // borderTop: 'solid 1px var(--shadow)',
//   // borderBottom: 'solid 1px var(--shadow)',
//   padding: '10px 0px 10px 0px',
//   marginTop: 10,
// }

// const icon ={
//   fontSize: '100pt',
//   color: 'var(--base1)',
// }

export default class Home extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      videos
    }
  }
  render() {
    return (
      <>
        <div className="page"> 
        <Header />

        <div className="reel">
          <ReactPlayer style={vid} url='https://www.youtube.com/watch?v=YtCy8ecMBeQ' loop controls width={'100%'} height={'100%'}/>
        </div>


         {this.state.videos.map((video) => (
            <VidScroller vids={video} />
          ))}

          </div>
        <Footer />

        <style jsx>{`
          /* desktop */
          @media (min-device-width:1224px) {
            .reel {
              height: 85vh;
              margin-bottom: 20px;
            }
          }

          /* large desktop screen */
          @media (min-device-width:1824px) {
            .reel {
              height: 75vh;
              margin-bottom: 20px;

            }

          }

          /* Small desktop screen */
          @media (max-width:1224px) {
            .reel {
              height: 90vh;
              margin-bottom: 20px;
            }

          }

          /* Tablet Device */
          @media (max-device-width:1224px) {
          @media (orientation: portrait) {
            .reel {
              height: 45vh;
              margin-bottom: 20px;
            }

          }
          @media (orientation: landscape) {
            .reel {
              height: 85vh;
              margin-bottom: 20px;
            }

          }
          }

          /* Mobile */
          @media (max-device-width:850px) {
          @media (orientation: portrait) {
            .reel {
              height: 35vh
              margin-bottom: 20px;
            }

          }
          @media (orientation: landscape) {
            .reel {
              height: 80vh;
              margin-bottom: 20px;
            }

          }
          }
        
      `}</style>


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

