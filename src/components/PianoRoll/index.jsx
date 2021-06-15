import React from 'react';
import { Row } from './Row';
import scales from './scales.json';
import styles from './styles.module.css';

export const PianoRoll = ({ octaves, verticalZoom, scale, setNotes, notes }) => (
  <ul className={styles.container}>
    {[...Array(octaves * scales[scale].length)].map((_, index) => {
      const current = scales[scale][index % scales[scale].length];

      return <Row height={verticalZoom * 20} 
                  key={current.note + index} 
                  setNotes={setNotes} 
                  notes={notes} 
                  octave={Math.floor(index / scales[scale].length)} 
                  note={current.note} 
                  isBlack={!current.natural} />;
    })}
  </ul>
);