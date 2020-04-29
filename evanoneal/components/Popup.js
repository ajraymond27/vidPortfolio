import React from 'react';
import Modal from 'react-modal';
import Video from './Video';
import ImgScroller from './ImgScroller';
 
const customStyles = {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root')
 
export default function Popup(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <img onClick={openModal} src={props.client.coverImg}/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <button onClick={closeModal}>X</button>
          <h2>{props.client.client}</h2>
          <p>{props.client.about}</p>

          {props.client.videos.map((video) => (
            <Video video={video} />
          ))}
        </Modal>
      </div>
    );
}