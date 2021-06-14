import React from 'react';

export const Toolbar = ({ bpm, setBpm, octaves, setOctaves, verticalZoom, setVericalZoom, horizontalZoom, setHorizontalZoom }) => (
  <ul>
    <label htmlFor="bpm">BPM:</label>
    <input type="number" id="bpm" name="bpm" min="50" max="300" value={bpm} onChange={(e) => setBpm(e.target.value)} />
    <label htmlFor="octaves">Octaves:</label>
    <input type="number" id="octaves" name="octaves" min="1" max="20" value={octaves} onChange={(e) => setOctaves(e.target.value)} />
    <label htmlFor="verticalZoom">Vertical Zoom:</label>
    <input type="number" id="verticalZoom" name="verticalZoom" min="1" max="10" value={verticalZoom} onChange={(e) => setVericalZoom(e.target.value)} />
    <label htmlFor="horizontalZoom">Horizontal Zoom:</label>
    <input type="number" id="horizontalZoom" name="horizontalZoom" min="1" max="10" value={horizontalZoom} onChange={(e) => setHorizontalZoom(e.target.value)} />
  </ul>
);