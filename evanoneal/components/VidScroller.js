import React from 'react';
import Popup from './Popup';

export default class VidScroller extends React.Component {
    constructor(props) {
      super(props);
    }
    
  
    render() {
        return (
            <div className="strip">
            <h1>{this.props.vids.category}</h1>
            <div className="grid-container">
                {this.props.vids.clients.map((client) => (
                <Popup client={client} />
                ))}

                <style jsx>{`
                    .strip {
                        width: 100%;
                        background-color: var(--base1);
                    }
                    .grid-container {
                        display: grid;
                        grid-gap: 10px;
                        grid-template-columns: repeat(100, 60%) 5px; 
                        grid-template-rows: minmax(150px, 1fr);
                        overflow-x: scroll;
                        padding-bottom: 10px;
                        margin-bottom: 10px;
                        align-content: start;
                        overflow-y: hidden; 
                        overflow-x: scroll;
                    }

                    .grid-container > div {
                        text-align: center;
                        padding: 10px 0;
                        font-size: 30px;
                    }
                `}</style>
            </div>
            </div>
        )
    }
  }