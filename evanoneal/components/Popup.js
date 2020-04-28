import React from 'react';
import Modal from 'react-modal';
import Video from './Video';
 
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
 
export default function Popup(){
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
        <img onClick={openModal} src='https://via.placeholder.com/400x200'/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <button onClick={closeModal}>X</button>
          <h2>Ken6teen</h2>
          <p>Ken is an up and coming taletnt in Bloomington, IN. He's been making beats since he was 16 and recently debuted his first album "Ken v Ken" that's available on all platforms. A combination of Kanye, Rocky, and Nas, Ken's flow reminds the Midwest of its roots.</p>
          
          <h3>WRKN</h3>
          <Video />
          <img src='https://via.placeholder.com/350x200'/>
          <img src='https://via.placeholder.com/350x200'/>
          <img src='https://via.placeholder.com/350x200'/>
          <p>WRKN was made by some dude and Evan Oneal helped shoot and edit the video. Give video description and credits here</p>

          <h3>Doddie Oddie</h3>
          <Video />
          <img src='https://via.placeholder.com/350x200'/>
          <img src='https://via.placeholder.com/350x200'/>
          <img src='https://via.placeholder.com/350x200'/>
          <p>Doddie Oddie was made by some dude and Evan Oneal helped shoot and edit the video. Give video description and credits here</p>
        </Modal>
      </div>
    );
}