import React from 'react';
import Popup from './Popup';

const Scroller = () => (
    <div className="grid-container">
        <div><Popup /></div>
        <div><Popup /></div>
        <div><Popup /></div>


        <style jsx>{`
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-gap: 10px;
            padding: 10px;
            overflow: scroll;

        }

        .grid-container > div {
            text-align: center;
            padding: 20px 0;
            font-size: 30px;
          }
      `}</style>
    </div>
);

export default Scroller;