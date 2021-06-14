import React from 'react';

export const Key = ({octave, note, isBlack, height}) => (
  <div style={{ color: 'grey', background: isBlack ? "black" : "white", height: height }}>
    {note}
  </div>
);