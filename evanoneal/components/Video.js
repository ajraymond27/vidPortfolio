import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
const vid ={
  margin: '0 auto',
  textAlign: 'center',
}

export default class Video extends Component {
  render () {
    return <ReactPlayer style={vid} url='https://www.youtube.com/watch?v=YtCy8ecMBeQ' playing loop controls width={'100%'} height={'80vh'}/>
  }
}