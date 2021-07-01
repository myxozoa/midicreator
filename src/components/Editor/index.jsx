import React, { useEffect, useState } from "react";
import { PianoRoll } from "../PianoRoll";
import { Toolbar } from "../Toolbar";
import { Note } from "../Note";
import { KeyPress } from "../../utils";
import styles from "./styles.module.css";

export const Editor = () => {
  const [selected, setSelected] = useState({});
  const [bpm, setBpm] = useState(120);
  const [octaves, setOctaves] = useState(2);
  const [verticalZoom, setVericalZoom] = useState(2);
  const [horizontalZoom, setHorizontalZoom] = useState(1);
  const [notes, setNotes] = useState([]);
  const [scale] = useState("fullOctave");

  const selectDeselectNode = (id) => {
    if (!selected[id]) {
      if (KeyPress.isKeyPressed("Control") || KeyPress.isKeyPressed("Shift")) {
        setSelected({ ...selected, [id]: true });
      } else {
        setSelected({ [id]: true });
      }
    } else {
      if (KeyPress.isKeyPressed("Control") || KeyPress.isKeyPressed("Shift")) {
        setSelected({ ...selected, [id]: false });
      } else {
        setSelected([]);
      }
    }
  };

  const noteAction = (event) => {
    const element = event.target.closest("[data-noteid]");

    if (element) {
      selectDeselectNode(element.dataset.noteid);
    }
  };

  useEffect(() => {
    const initiateNoteAction = window.addEventListener("mousedown", noteAction);

    return () => {
      window.removeEventListener("mousedown", initiateNoteAction);
    };
  }, []);

  return (
    <div>
      <Toolbar {...{ bpm, setBpm, octaves, setOctaves, verticalZoom, setVericalZoom, horizontalZoom, setHorizontalZoom }} />
      <div className={styles.scroll}>
        <PianoRoll {...{ octaves, notes, verticalZoom, scale, setNotes, setSelected }} />
        <div className={styles.notes}>
          {notes.map((note) => (
            <Note
              key={`${note.id}`}
              {...note}
              height={verticalZoom * 20}
              scale={scale}
              removeNote={() => setNotes(notes.filter((item) => item.id !== note.id))}
              isSelected={Boolean(selected[note.id])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
