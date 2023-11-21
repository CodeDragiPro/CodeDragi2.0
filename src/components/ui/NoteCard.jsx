import React from 'react';
import { MdDelete } from 'react-icons/md';

const NoteCard = ({ noteId, noteTitle, noteDescription, onDeleteClick }) => {
  const handleDeleteClick = () => {
    onDeleteClick(noteId);
  };

  return (
    <div className="bg-codedragi-gray rounded-md w-full md:mx-2 my-2 p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-codedragi-blue mb-2">{noteTitle}</h1>
        <MdDelete
          className="text-2xl text-codedragi-blue hover:text-red-500"
          onClick={handleDeleteClick}
        />
      </div>
      <p className="text-left">{noteDescription}</p>
    </div>
  );
};




export default NoteCard;
