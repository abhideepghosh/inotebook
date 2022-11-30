import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get ALL Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MWNiNWU4MDE5NTI1OWY0YmM2OTcxIn0sImlhdCI6MTY2OTUyNTY2NX0.Ty6NSYs3aLTxSxiYv5YCCIcMrsyw7s_oEniEaBrzGwA",
      },
    });

    const json = await response.json();

    console.log(json);
    setNotes(json);
  };

  // Add A Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MWNiNWU4MDE5NTI1OWY0YmM2OTcxIn0sImlhdCI6MTY2OTUyNTY2NX0.Ty6NSYs3aLTxSxiYv5YCCIcMrsyw7s_oEniEaBrzGwA",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new note");
    const note = {
      _id: "6385b44348a22895cd078cc2",
      user: "6381cb5e80195259f4bc6971",
      title: title,
      description: description,
      tag: tag,
      date: "2022-11-29T07:26:59.124Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete A Note
  const deleteNote = (id) => {
    console.log("Deleting Note With id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit A Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4MWNiNWU4MDE5NTI1OWY0YmM2OTcxIn0sImlhdCI6MTY2OTUyNTY2NX0.Ty6NSYs3aLTxSxiYv5YCCIcMrsyw7s_oEniEaBrzGwA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
