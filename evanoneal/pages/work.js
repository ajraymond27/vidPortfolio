import videos from '../data/videos';
import Header from '../components/Header';
import VidScroller from '../components/VidScroller';

export default class Work extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      videos
    }
  }
  render() {
    return (
      <>
      <Header />
      <div className="page"> 
        {this.state.videos.map((video) => (
          <VidScroller vids={video} />
        ))}
      </div>

      </>
    )
  }
}