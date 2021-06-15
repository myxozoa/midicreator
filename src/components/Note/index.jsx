import React from 'react';
import scales from '../PianoRoll/scales.json';

export const Note = ({ note, octave, start, duration, height, scale, velocity }) => {
  const index = scales[scale].findIndex(item => item.note === note);

  return (
    <div style={{ height: height, width: duration * 10, background: 'red', position: 'absolute', left: start, top: (octave * scales[scale].length * height + index * height) }}>
      {note}{octave}
    </div>
  );
}