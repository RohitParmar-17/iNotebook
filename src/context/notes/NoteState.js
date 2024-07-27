import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {

    // Api Call
    const response = await fetch(`${apiUrl}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)
  };

  //Add a note
  const addNote = async (title, description, tag) => {

    // Api Call
    const response = await fetch(`${apiUrl}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag}),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {

    // Api Call
    const response = await fetch(`${apiUrl}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json)

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };






  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // Api Call
    const response = await fetch(`${apiUrl}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes , addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
