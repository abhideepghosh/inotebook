import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63837b68b74c8ea8cbb89099",
      user: "6381cb5e80195259f4bc6971",
      title: "Wake Up Early",
      description: "Wake Up By 6am in the morning.",
      tag: "personal",
      date: "2022-11-27T09:18:32.680Z",
      __v: 0,
    },
    {
      _id: "6385b44358822895cd078cc2",
      user: "6381cb5e80195259f4bc6971",
      title: "Worship Divine Angel",
      description: "Worship Till 8am",
      tag: "personal",
      date: "2022-11-29T07:26:59.124Z",
      __v: 0,
    },
    {
      _id: "63832b68b74c8ea8cbb89099",
      user: "6381cb5e80195259f4bc6971",
      title: "Wake Up Early",
      description: "Wake Up By 6am in the morning.",
      tag: "personal",
      date: "2022-11-27T09:18:32.680Z",
      __v: 0,
    },
    {
      _id: "6385b44358a22895cd078cc2",
      user: "6381cb5e80195259f4bc6971",
      title: "Worship Divine Angel",
      description: "Worship Till 8am",
      tag: "personal",
      date: "2022-11-29T07:26:59.124Z",
      __v: 0,
    },
    {
      _id: "63832b68b34c8ea8cbb89099",
      user: "6381cb5e80195259f4bc6971",
      title: "Wake Up Early",
      description: "Wake Up By 6am in the morning.",
      tag: "personal",
      date: "2022-11-27T09:18:32.680Z",
      __v: 0,
    },
    {
      _id: "6385b44348a22895cd078cc2",
      user: "6381cb5e80195259f4bc6971",
      title: "Worship Divine Angel",
      description: "Worship Till 8am",
      tag: "personal",
      date: "2022-11-29T07:26:59.124Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add A Note
  const addNote = (title, description, tag) => {
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
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
