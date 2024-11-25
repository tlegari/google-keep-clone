import React, {useState} from 'react';
import './Note.css';

const Note = ({note, openModal, deleteNote}) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
    setIsMenuOpen(false);
    document.removeEventListener("mousedown", handleDocumentClick);
  }

  const handleDocumentClick = (event) => {
    if(
      !event.target.closest(".popup-menu") &&
       !event.target.closest(".footer-icon")
    ){
      setIsMenuOpen(false);
      document.removeEventListener("mousedown", handleDocumentClick);
    }
  }

  const toggleMenu = (e) => {
    e.stopPropagation();
    if(!isMenuOpen){
      setIsMenuOpen(true);
      document.addEventListener('mousedown', handleDocumentClick );
    }else{
      setIsMenuOpen(false);
      document.addEventListener('mousedown', handleDocumentClick );
    }
  }
  return (
    <div className="note" onClick={() => openModal(note)}>
      <div className="note-content">
        <div className="note-header">
          <p>{note.title}</p>
          <span className="material-symbols-outlined nav-icon note-pin">keep</span>
        </div>
        <p>{note.text}</p>
      </div>
                
      <div className="note-footer-icons">
        <span className="material-symbols-outlined footer-icon ">add_alert</span>
        <span className="material-symbols-outlined footer-icon ">person_add</span>
        <span className="material-symbols-outlined footer-icon ">palette</span>
        <span className="material-symbols-outlined footer-icon ">image</span>
        <span className="material-symbols-outlined footer-icon ">archive</span>
        <span className="material-symbols-outlined footer-icon " onClick={(e) =>{
          e.stopPropagation();
          toggleMenu(e);
        }}>
          more_vert
          </span>
          {isMenuOpen && (
          <div className="popup-menu">
            <button onClick={handleDelete}>Delete Note</button>
            <button>Add label</button>
            <button>Add drawing</button>
            <button>Make a copy</button>
            <button>Show tick boxes</button>
            <button>Copy to Google Docs</button>
            <button>Version history</button>
          </div>
          )} 
      </div>

     </div>
       
  );
};

export default Note;