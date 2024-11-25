
import React, { useState } from 'react';
import './Forms.css';
import Modal from '../Modal/Modal';


const Forms = ({addNote}) => {

    const [isActiveForm, setIsActiveForm] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const clearInputs = () => {
        setTitle("");
        setText("");
    };

    const handFormClick = () => {
        setIsActiveForm(true);
        
        setTimeout(() => {
           const titleInput = document.getElementById("titleInput");
            if(titleInput){
                titleInput.focus();
            }
        }, 0);

        document.addEventListener('mousedown', handleDocumentClick)
    }

    const handleClose = () => {
        const currentTitle = document.getElementById('titleInput')?.value || "";
        const currentText = document.getElementById('textInput')?.value || "";


        if( currentTitle || currentText) {
            addNote( currentTitle, currentText);
        }
        clearInputs();
        setIsActiveForm(false);
        document.removeEventListener("mousedown",handleDocumentClick);
    };

  const handleDocumentClick = (event) => {
    if(!event.target.closest(".active-form-container")){
       handleClose();
    }
  }
  return (
    <div className="main-content">
         <div className={`inactive-form-container ${isActiveForm ? "hidden" : ""}`} 
         onClick={handFormClick}
         >
            <form className="inactive-form">
            <input type="text"
                   placeholder="Take a note..."/>
            <div className="inactive-form-icons">
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">check_box</span>
                    <span className="tooltip-text">New list</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">{" "}brush{" "}</span>
                    <span className="tooltip-text">New note with drawing</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">
                        {" "}
                        image{" "}
                        </span>
                    <span className="tooltip-text">New note with image</span>
                </div> 
             </div>
            </form>
        </div>

        <div className={`active-form-container ${isActiveForm ? "visible" : ""}`}>
            <form className="active-form ">
                <div className="note-title">
                    <input id="titleInput" type="text" placeholder="Title" value={title} autoFocus={isActiveForm} onChange={(e) => setTitle(e.target.value)}/>
                    <span className="material-symbols-outlined nav-icon note-pin">keep</span>
                </div>
                <div className="note-text">
                    <input id="textInput" type="text" placeholder="Text...." value={text} onChange={(e) => setText(e.target.value)}/>
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
                        <button type="button" className="close-button" onClick={handleClose}>Close</button>

                    </div>
                    
                </div>
            </form>

        </div>

     <Modal />
    </div>
  )
}

export default Forms;
