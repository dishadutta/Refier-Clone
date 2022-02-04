import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Form from './modalElement/form';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function Login() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button style={{background:'transparent', fontWeight:'bold', border:'solid #000 1px', padding:'4.5px 40px 4.5px 40px', borderRadius:'0.2rem'}} onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={100000}
      >
        
        <button onClick={closeModal}><span class="material-icons"> close </span></button>
        <Form/>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<Login />, appElement);
export default Login;