import React from 'react';
import './Modal.css'


const Modal = ({active, setActive, height, width, children, }) => {
    return (
        <div className={ active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div style={{height:height, width:width}} className='Modal_content' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;