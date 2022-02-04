import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <a
      // className="nav-link active"
      // style={{background:'transparent', color:'black', fontWeight:'bold', border:'solid #000 1px', padding:'4.5px 40px 4.5px 40px', borderRadius:'0.2rem'}}
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </a>
  );
};
export default Trigger;
