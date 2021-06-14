import React from 'react';
import { Row } from './Row';
import scales from './scales.json';
import './styles.css';

export const PianoRoll = ({ octaves, verticalZoom, scale }) => (
  <ul className="container">
    {[...Array(octaves * 12)].map((_, index) => {
      const current = scales[scale][index % scales[scale].length];

      return <Row height={verticalZoom * 20} key={current.note + index} octave={Math.floor(index / scales[scale].length)} note={current.note} isBlack={!current.natural} />;
    })}
  </ul>
);