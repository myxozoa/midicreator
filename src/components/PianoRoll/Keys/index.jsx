import React from 'react';
import { Key } from '../Key';

const notesInOctave = [{ note: 'C', natural: true },
                       { note: 'C#', natural: false }, 
                       { note: 'D', natural: true }, 
                       { note: 'D#', natural: false },
                       { note: 'E', natural: true }, 
                       { note: 'F', natural: true }, 
                       { note: 'F#', natural: false },
                       { note: 'G', natural: true }, 
                       { note: 'G#', natural: false }, 
                       { note: 'A', natural: true },
                       { note: 'A#', natural: false }, 
                       { note: 'B', natural: true }, 
                      ];

export const Keys = ({ octaves }) => (
  <ul>
    {[...Array(octaves * 12)].map((_, index) => {
      const current = notesInOctave[index % notesInOctave.length];

      return <Key key={current.note + index} octave={Math.floor(index / notesInOctave.length)} note={current.note} isBlack={current.natural} />;
    })}
  </ul>
);