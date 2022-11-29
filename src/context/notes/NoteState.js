import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
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
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
