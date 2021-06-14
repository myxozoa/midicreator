import React from 'react';
import { Keys } from './Keys';
import './styles.css';

export const PianoRoll = ({ octaves, verticalZoom, scale }) => (
  <div className="container">
    <Keys octaves={octaves} heights={verticalZoom * 20} scale={scale} />
    <div className="sheet">
    </div>
  </div>
);