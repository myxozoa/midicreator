import { useEffect, useState } from "react";

export const msToPx = () => {};

export const pxToMs = () => {};

export class KeyPress {
  static keys = [];

  static init() {
    document.addEventListener("keydown", (event) => {
      if (!this.keys.includes(event.key)) {
        this.keys.push(event.key);
      }
    });

    document.addEventListener("keyup", (event) => {
      const index = this.keys.findIndex((key) => key === event.key);

      if (index !== -1) {
        this.keys.splice(index, 1);
      }
    });
  }

  static isKeyPressed(key) {
    return this.keys.includes(key);
  }

  static getKeysPressed() {
    return this.keys;
  }
}

export const useMousePosition = (defaultState = { x: 0, y: 0 }) => {
  const [position, setPosition] = useState(defaultState);

  useEffect(() => {
    const mouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      setPosition({ x, y });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return position;
};
