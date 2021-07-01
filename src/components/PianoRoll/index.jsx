import React, { useState, useEffect, useRef } from "react";
import { Row } from "./Row";
import scales from "./scales.json";
import { useMousePosition } from "../../utils";
import styles from "./styles.module.css";

export const PianoRoll = ({ octaves, verticalZoom, scale, setNotes, notes, setSelected }) => {
  const containerRef = useRef(null);
  const containerBoundingRect = useRef(null);
  const [currentHighlight, setCurrentHighlight] = useState(-1);
  const mousePosition = useMousePosition();
  const height = verticalZoom * 20;

  useEffect(() => {
    containerBoundingRect.current = containerRef.current.getBoundingClientRect().top;
  }, []);

  useEffect(() => {
    const elementTop = containerBoundingRect.current;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = elementTop + scrollTop;
    const yOffset = mousePosition.y - top;

    const index = Math.floor(yOffset / height);
    setCurrentHighlight(index);
  }, [mousePosition]);

  return (
    <ul ref={containerRef} className={styles.container}>
      {[...Array(octaves * scales[scale].length)].map((_, index) => {
        const current = scales[scale][index % scales[scale].length];

        return (
          <Row
            highlight={currentHighlight === index}
            height={height}
            key={current.note + index}
            setNotes={setNotes}
            setSelected={setSelected}
            notes={notes}
            octave={Math.floor(index / scales[scale].length)}
            note={current.note}
            isBlack={!current.natural}
          />
        );
      })}
    </ul>
  );
};
