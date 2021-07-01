import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import scales from "../PianoRoll/scales.json";

// Note, Octave and Start should be sufficient to identify a Note
// I'm not concerned with supporting notes that overlap this significantly

export const Note = ({ id, note, octave, start, duration, height, scale, removeNote, isSelected, select, deselect, velocity }) => {
  const index = scales[scale].findIndex((item) => item.note === note);

  const remove = (e) => {
    e.stopPropagation();
    removeNote();
  };

  // const mouseAction = ({ clientX: x, clientY: y }) => {
  //   setClickAction(true);
  //   setClickStartLocation({ x, y });

  //   if (isSelected) {
  //     deselect();
  //   } else {
  //     select();
  //   }
  // };

  // const mouseMove = ({ clientX: x, clientY: y }) => {
  //   if (!clickAction) return;

  //   const threshold = 5;
  //   console.log("move");

  //   if (Math.abs(clickStartLocation.x - x) > threshold && Math.abs(clickStartLocation.y - y) > threshold) {
  //     console.log("thres");
  //   }
  // };

  // const mouseUp = () => {
  //   setClickAction(false);
  // };

  // useEffect(() => {
  //   const noteRef = ref.current;
  //   const one = noteRef.parentElement.addEventListener("mousemove", mouseMove);
  //   const two = noteRef.parentElement.addEventListener("mouseup", mouseUp);

  //   return () => {
  //     noteRef?.parentElement.removeEventListener("mousemove", one);
  //     noteRef?.parentElement.removeEventListener("mouseup", two);
  //   };
  // }, []);

  return (
    <div
      data-noteid={id}
      className={styles.note}
      // onMouseDown={mouseAction}
      style={{ height: height - 2, width: duration * 10, left: start, top: octave * scales[scale].length * height + index * height }}
    >
      {isSelected && <div className={styles.handle} />}
      <div className={styles.body} onDoubleClick={remove}>
        {note}
        {octave}
      </div>
      {isSelected && <div className={styles.handle} />}
    </div>
  );
};
