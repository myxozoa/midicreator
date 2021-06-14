import react from 'react';

export const Note = ({ note, octave, duration, velocity }) => {


  return (
    <div style={{ height: '100%', width: '100px', background: 'red' }}>
      {note}{octave}
    </div>
  );
}