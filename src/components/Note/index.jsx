import React from 'react';
import styles from './styles.module.css';
import scales from '../PianoRoll/scales.json';

// Note, Octave and Start should be sufficient to identify a Note
// I'm not concerned with supporting notes that overlap this significantly

export const Note = ({ note, octave, start, duration, height, scale, removeNote, isSelected, select, deselect, velocity }) => {
  const index = scales[scale].findIndex(item => item.note === note);

  const remove = (e) => {
    e.stopPropagation();
    removeNote();
  }

  const selectDeselect = () => {
    if (isSelected) {
      deselect();
    } else {
      select();
    }
  }

  return (
    <div className={styles.note} onClick={selectDeselect} style={{ height: height, width: duration * 10, left: start, top: (octave * scales[scale].length * height + index * height) }}>
      {isSelected && <div className={styles.handle} />}
      <div className={styles.body} onDoubleClick={remove}>{note}{octave}</div>
      {isSelected && <div className={styles.handle} />}
    </div>
  );
}