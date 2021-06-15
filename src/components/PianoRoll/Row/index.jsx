import React, { useRef, useEffect } from 'react';
import { Key } from '../Key';
import { Note } from '../../../objects/Note';
import styles from './styles.module.css';

export const Row = ({ height, isBlack, octave, note, notes, setNotes }) => {
  const row = useRef(null);

  const onClick = (event) => {
    const rect = row.current.getBoundingClientRect();
    const xOffset = event.clientX - rect.left;

    setNotes([...notes, new Note(note, octave, xOffset, 10)]);
  }

  return (
    <div onDoubleClick={onClick} style={{ height }} className={styles.row}>
      <Key isBlack={isBlack} note={note} octave={octave} />
      <div ref={row} id={note + octave + 'sheet'}>

      </div>
    </div>
  )
};