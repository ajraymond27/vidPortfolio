import React from 'react';
// import Modal from 'react-modal';
import Video from './Video';

import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

function Content(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
      </Modal.Header>
      <Modal.Body>
        <h2>{props.client.client}</h2>
        <p>{props.client.about}</p>

        {props.client.videos.map((video) => (
          <Video video={video} />
        ))}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function Popup(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <img  onClick={() => setModalShow(true)} src={props.client.coverImg} style={coverImg}/>

      <Content
        client = {props.client}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


const coverImg = {
  width: '100%',
}
 
