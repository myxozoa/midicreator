import React, { useEffect, useState, useRef } from "react";
import { PianoRoll } from "../PianoRoll";
import { Toolbar } from "../Toolbar";
import { Note } from "../Note";
import { KeyPress, useMousePosition, stateRefSync } from "../../utils";
import styles from "./styles.module.css";

export const Editor = () => {
  // Application State
  const [bpm, setBpm] = useState(120);
  const [octaves, setOctaves] = useState(2);
  const [verticalZoom, setVericalZoom] = useState(2);
  const [horizontalZoom, setHorizontalZoom] = useState(1);
  const [notes, setNotes] = useState([]);
  const [scale] = useState("fullOctave");

  // Interaction State
  const mousePosition = useMousePosition();
  const [selected, setSelected] = useState({});
  const [clicked, setClicked] = useState(false);
  const [movingNote, setMovingNote] = useState(null);
  const [clickStartLocation, setClickStartLocation] = useState({ x: 0, y: 0 });

  const interactionData = useRef({ octaves, scale, notes, selected, clicked, movingNote, clickStartLocation, verticalZoom, horizontalZoom });

  const interact = stateRefSync(interactionData);

  const selectDeselectNode = (id) => {
    const selected = interactionData.current.selected;

    const multiSelect = KeyPress.isKeyPressed("Control") || KeyPress.isKeyPressed("Shift");

    if (!selected[id]) {
      if (multiSelect) {
        interact({ setSelected }, { ...selected, [id]: true });
      } else {
        interact({ setSelected }, { [id]: true });
      }
    } else {
      if (multiSelect) {
        interact({ setSelected }, { ...selected, [id]: false });
      } else {
        interact({ setSelected }, {});
      }
    }
  };

  const noteAction = (event) => {
    const element = event.target.closest("[data-noteid]");
    const x = event.clientX;
    const y = event.clientY;

    if (element) {
      const id = element.dataset.noteid;
      const { notes } = interactionData.current;

      interact({ setClicked }, true);
      interact({ setClickStartLocation }, { x, y });
      interact({ setMovingNote }, notes.filter((item) => item.id === id)[0]);
      selectDeselectNode(id);
    }
  };

  const noteMove = (event) => {
    const { clickStartLocation, clicked, movingNote } = interactionData.current;

    if (!clicked) return;

    const x = event.clientX;
    const y = event.clientY;

    const threshold = 5;

    const xOffset = Math.abs(clickStartLocation.x - x);
    const yOffset = Math.abs(clickStartLocation.y - y);

    if (xOffset > threshold && yOffset > threshold) {
      // Since filter returns a reference to the items in the notes array modifying them will update it
    }
  };

  const mouseUp = () => {
    interact({ setClicked }, false);
  };

  useEffect(() => {
    const initiateNoteAction = window.addEventListener("mousedown", noteAction);
    const initiateNoteMove = window.addEventListener("mousemove", noteMove);
    const initiateMouseUp = window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousedown", initiateNoteAction);
      window.removeEventListener("mousemove", initiateNoteMove);
      window.removeEventListener("mouseup", initiateMouseUp);
    };
  }, []);

  return (
    <div>
      <Toolbar {...{ bpm, setBpm, octaves, setOctaves, verticalZoom, setVericalZoom, horizontalZoom, setHorizontalZoom }} />
      <div className={styles.scroll}>
        <PianoRoll
          {...{ octaves, notes, verticalZoom, scale, setNotes, setSelected }}
          setSelected={(data, ...extra) => interact({ setSelected }, data, ...extra)}
          setNotes={(data, ...extra) => interact({ setNotes }, data, ...extra)}
        />
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
