import React, { useState } from "react";
import { PianoRoll } from "../PianoRoll";
import { Toolbar } from "../Toolbar";
import { Note } from "../Note";
import { KeyPress } from "../../utils";
import styles from "./styles.module.css";

export const Editor = () => {
  const [selected, setSelected] = useState([]);
  const [bpm, setBpm] = useState(120);
  const [octaves, setOctaves] = useState(1);
  const [verticalZoom, setVericalZoom] = useState(2);
  const [horizontalZoom, setHorizontalZoom] = useState(1);
  const [notes, setNotes] = useState([]);
  const [scale, setScale] = useState("fullOctave");

  return (
    <div>
      <Toolbar {...{ bpm, setBpm, octaves, setOctaves, verticalZoom, setVericalZoom, horizontalZoom, setHorizontalZoom }} />
      <div className={styles.scroll}>
        <PianoRoll {...{ octaves, notes, verticalZoom, scale, setNotes }} />
        <div className={styles.notes}>
          {notes.map((note) => (
            <Note
              key={`${note.note}${note.octave}${note.start}`}
              {...note}
              height={verticalZoom * 20}
              scale={scale}
              removeNote={() => setNotes(notes.filter((item) => !(item.note === note.note && item.octave === note.octave && item.start === note.start)))}
              isSelected={selected.find((item) => item.note === note.note && item.octave === note.octave && item.start === note.start)}
              select={() => {
                if (KeyPress.isKeyPressed("Control") || KeyPress.isKeyPressed("Shift")) {
                  setSelected([...selected, note]);
                } else {
                  setSelected([note]);
                }
              }}
              deselect={() => {
                if (KeyPress.isKeyPressed("Control") || KeyPress.isKeyPressed("Shift")) {
                  setSelected(selected.filter((item) => !(item.note === note.note && item.octave === note.octave && item.start === note.start)));
                } else {
                  setSelected([]);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
