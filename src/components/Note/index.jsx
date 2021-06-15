import React from 'react';
import scales from '../PianoRoll/scales.json';

// Note Octave and Start should be sufficient to identify a Note
// I'm not concerned with supporting notes that overlap this significantly

export const Note = ({ note, octave, start, duration, height, scale, notes, setNotes, velocity }) => {
  const index = scales[scale].findIndex(item => item.note === note);

  const onClick = (e) => {
    e.stopPropagation();
    const nodeRemoved = notes.filter(item => !((item.note === note) && (item.octave === octave) && (item.start === start)));

    setNotes(nodeRemoved);
  }

  return (
    <div onClick={onClick} style={{ pointerEvents: 'auto', height: height, width: duration * 10, background: 'red', position: 'absolute', left: start, top: (octave * scales[scale].length * height + index * height) }}>
      {note}{octave}
    </div>
  );
}