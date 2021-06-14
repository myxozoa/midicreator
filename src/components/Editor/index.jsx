import React, { useState, useEffect } from 'react';
import { PianoRoll } from '../PianoRoll';
import { Toolbar } from '../Toolbar';

export const Editor = () => {
  const [selected, setSelected] = useState([]);
  const [bpm, setBpm] = useState(120);
  const [octaves, setOctaves] = useState(1);
  const [verticalZoom, setVericalZoom] = useState(1);
  const [horizontalZoom, setHorizontalZoom] = useState(1);
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Toolbar {...{ bpm, setBpm, octaves, setOctaves, verticalZoom, setVericalZoom, horizontalZoom, setHorizontalZoom }} />
      <PianoRoll {...{ octaves, notes }} />
    </div>
  );
}