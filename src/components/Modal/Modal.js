import React, {useState} from 'react';
import './Modal.css';

const Modal = ({note, closeModal, updateNote}) => {
    const [title, setTitle] = useState(note ? note.title : "");
    const [text, setText] = useState(note ? note.text : "");

    if(!note) {
        return null;
    }

    const handleOutsideClick = (e) => {
        if(e.target.classList.contains("modal")){
            handleSaveAndClose();
        }
       
    }

    const handleSaveAndClose = () => {
        if(title !== note.title || text !== note.text){
            updateNote(note.id, text, title)
        }
        closeModal();
    }
    return (
        <div className={`modal ${note ? "open-modal" : ""}`} onClick={handleOutsideClick}>
            <div className="modal-content">
                <div className="form-container">
                    <form className="form" id="modal-form" >
                        <div className="note-title">
                            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <span className="material-symbols-outlined nav-icon note-pin">keep</span>
        
                        </div>
                        <div className="note-text">
                            <input type="text" placeholder="Text...."value={text} onChange={(e) => setText(e.target.value)}/>
                        </div>
                        <div className="note-footer">
                            <div className="footer-icons">
                            <span className="material-symbols-outlined footer-icon ">add_alert</span>
                            <span className="material-symbols-outlined footer-icon ">person_add</span>
                            <span className="material-symbols-outlined footer-icon ">palette</span>
                            <span className="material-symbols-outlined footer-icon ">image</span>
                            <span className="material-symbols-outlined footer-icon ">archive</span>
                            <span className="material-symbols-outlined footer-icon ">more_vert</span>
                            <span className="material-symbols-outlined footer-icon undo-icon">undo</span>
                            <span className="material-symbols-outlined footer-icon redo-icon">redo</span>
                            </div>
                            <div className="footer-button">
                                <button type="button" className="close-button" onClick={handleSaveAndClose}>
                                    Close
                                </button>
        
                            </div>
                        </div>
                    </form>
                </div>

        </div>
    </div>
  )
}

export default Modal
