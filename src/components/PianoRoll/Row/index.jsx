import React, { useRef, useEffect } from "react";
import { Key } from "../Key";
import { createNote } from "../../../objects/Note";
import styles from "./styles.module.css";

export const Row = ({ height, isBlack, octave, note, notes, setNotes, setSelected }) => {
  const row = useRef(null);

  const addNote = (event) => {
    const rect = row.current.getBoundingClientRect();
    const xOffset = event.clientX - rect.left;

    if (xOffset < 0) return;

    const newNote = createNote(note, octave, xOffset, 10);

    setNotes([...notes, newNote]);
    setSelected({ [newNote.id]: true });
  };

  return (
    <div onDoubleClick={addNote} data-isblack={isBlack} style={{ height }} className={styles.row}>
      <Key isBlack={isBlack} note={note} octave={octave} />
      <div ref={row} id={note + octave + "sheet"} />
    </div>
  );
};
