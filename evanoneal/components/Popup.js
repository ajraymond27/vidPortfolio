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







 
const customStyles = {
    top                   : '90%',
    left                  : '90%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overlay: {

    }
};

const coverImg = {
  width: '100%',
}
 
// // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// // Modal.setAppElement('#root')
 
// export default function Popup(props){
//   var subtitle;
//   const [modalIsOpen,setIsOpen] = React.useState(false);
//   function openModal() {
//     setIsOpen(true);
//   }
 
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     // subtitle.style.color = '#f00';
//   }
 
//   function closeModal(){
//     setIsOpen(false);
//   }
 
//     return (
//       <div>
        
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Video Modal"
//         >
 
//           <button onClick={closeModal}>X</button>

//         </Modal>
//       </div>
//     );
// }