import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ImgScroller from './ImgScroller';

const vid ={
  margin: '0 auto',
  textAlign: 'center',
}

export default class Video extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <h4>{this.props.video.title}</h4>
        <p>{this.props.video.desc}</p>
        <ReactPlayer style={vid} url={this.props.video.youtube} loop controls width={'100%'} />
        <ImgScroller video={this.props.video} />
      </>
    )
  }
}