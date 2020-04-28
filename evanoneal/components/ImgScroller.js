import React from 'react';

const ImgScroller = () => (
    <div className="grid-container">
        <img src='https://via.placeholder.com/400x200'/>
        <img src='https://via.placeholder.com/400x200'/>
        <img src='https://via.placeholder.com/400x200'/>
        <img src='https://via.placeholder.com/400x200'/>
        <img src='https://via.placeholder.com/400x200'/>
        <img src='https://via.placeholder.com/400x200'/>



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
    </div>
);

export default ImgScroller;