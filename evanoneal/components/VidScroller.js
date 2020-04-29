import React from 'react';
import Popup from './Popup';

export default class VidScroller extends React.Component {
    constructor(props) {
      super(props);
    }
    
  
    render() {
        return (
            <>
            <h1>{this.props.vids.category}</h1>
            <div className="grid-container">
                {this.props.vids.clients.map((client) => (
                <Popup client={client} />
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

                    .grid-container > div {
                        text-align: center;
                        padding: 20px 0;
                        font-size: 30px;
                    }
                `}</style>
            </div>
            </>
        )
    }
  }