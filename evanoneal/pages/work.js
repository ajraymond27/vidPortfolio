import Header from '../components/Header';
import VidScroller from '../components/VidScroller';

const Work = () => (
  <>
  <Header />
  <div className="page"> 
    <h1>Short Films</h1>
    <VidScroller />

    <h1>Music Videos</h1>
    <VidScroller />

    <h1>Fashion</h1>
    <VidScroller />

    <h1>Commercials</h1>
    <VidScroller />
  </div>
  </>
)

export default Work
