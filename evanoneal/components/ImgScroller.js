import React, { Component } from 'react';

export default class ImgScroller extends Component {
    constructor(props) {
      super(props);
    }
  
    render () {
        return (
            <ul className="grid-container">
                {this.props.video.imgs.map((img) => (

                        <img src={img.img} />
                ))}

                <style jsx>{`
                    .grid-container {
                        display: grid;
                        grid-template-columns: auto auto auto auto auto auto auto;
                        grid-gap: 10px;
                        padding: 10px;
                        overflow: scroll;
                        overflow-y: hidden;

                    }

                    .grid-container > img {
                        text-align: center;
                        padding: 20px 0;
                        font-size: 30px;
                    }
                `}</style>
            </ul>
        )
    }
  }