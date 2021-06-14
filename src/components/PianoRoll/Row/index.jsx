import React from 'react';
import { Key } from '../Key';
import styles from './styles.module.css';

export const Row = ({ height, isBlack, octave, note }) => (
  <div style={{ height }} className={styles.row}>
    <Key isBlack={isBlack} note={note} octave={octave} />
    <div id={note + octave + 'sheet'}>

    </div>
  </div>
);