import React from "react";
import styles from "./styles.module.css";

export const Key = ({ show, octave, note, isBlack }) => (
  <div className={styles.key} style={{ background: isBlack ? "black" : "white" }}>
    <div data-shownotename={show} className={styles.noteName}>
      {note}
      {octave}
    </div>
  </div>
);
