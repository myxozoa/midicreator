import React from 'react';
import { Key } from '../Key';
import styles from './styles.module.css';
import scales from '../scales.json';

export const Keys = ({ octaves, heights, scale }) => (
  <ul className={styles.keys}>
    {[...Array(octaves * 12)].map((_, index) => {
      const current = scales[scale][index % scales[scale].length];

      return <Key height={heights} key={current.note + index} octave={Math.floor(index / scales[scale].length)} note={current.note} isBlack={!current.natural} />;
    })}
  </ul>
);