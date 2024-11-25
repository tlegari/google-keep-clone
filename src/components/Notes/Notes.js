import React from 'react';
import Note from './Note/Note';
import './Notes.css';

const Notes = ({notes, openModal, deleteNote}) => {
  return (
    <div className="notes">
    {notes.map((note) => (
      <Note key={note.id} note={note} openModal={openModal} deleteNote={deleteNote} />
    ))}
 </div>
  );
};

export default Notes;