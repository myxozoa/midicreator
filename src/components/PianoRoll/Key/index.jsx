import React from 'react';

export const Key = ({octave, note, isBlack}) => (
  <div style={{ color: 'grey', background: isBlack ? "black" : "white", height: '100%', width: '50px' }}>
    {note}
  </div>
);