import React from 'react';
// import Modal from 'react-modal';
import Video from './Video';

import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const modal = {
  border: 'none',
  backgroundColor: '#000',
  overflow: 'hidden',
}


function Content(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={modal}
    >
      <Modal.Header closeButton style={modal} >
        <h2>{props.client.client}</h2>
      </Modal.Header>
      <Modal.Body style={modal}>
        {props.client.videos.map((video) => (
          <Video video={video} />
        ))}
      </Modal.Body>
    </Modal>
  );
}

export default function Popup(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <img  onClick={() => setModalShow(true)} src={props.client.coverImg} className='coverImg'/>

      <Content
        client = {props.client}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

  <style jsx>{`
    .coverImg {
      width: 100%;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    }
    .coverImg:hover {
      transform: scale(1.02);
      cursor: pointer;
    }

    `}</style>
    </>
  );
}
 
