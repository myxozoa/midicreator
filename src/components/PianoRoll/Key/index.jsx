import React from 'react';
import styles from './styles.module.css';

export const Key = ({octave, note, isBlack}) => (
  <div className={styles.key} style={{ color: 'grey', background: isBlack ? "black" : "white", height: '100%', width: '50px' }}>
    {note}{octave}
  </div>
);