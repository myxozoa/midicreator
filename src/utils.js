import { useEffect, useState } from "react";

export const msToPx = () => {};

export const pxToMs = () => {};

/**
 * Singleton to query the current state of any key on the keyboard
 */
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

  /**
   * @param {KeyboardEvent.key} key
   * @returns {boolean}
   */
  static isKeyPressed(key) {
    return this.keys.includes(key);
  }

  static getKeysPressed() {
    return this.keys;
  }
}

/**
 * React hook to always access the current client mouse position on the window object
 * @param  {{ x: number, y: number }} defaultState
 * @returns {{ x: number, y: number }}
 */
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

/**
 * Middleware between react hook state and a ref object used so that event listeners can always access up-to-date state
 * @param  {import("react").Ref} dataRef
 * @param  {import("react").Dispatch} changeStateFunc
 * @param  {any} data
 * @returns void
 */
export const stateRefSync =
  (dataRef) =>
  (changeStateFunc, data, ...extra) => {
    // must be called with the setState function in an object to maintain a reference to its name
    // using those names to derive the names of the properties
    // ie. "setClicked" => "clicked"
    // i need to investigate if there is a way to make this less fragile with lint rules or something

    const [functionName, functionItself] = Object.entries(changeStateFunc)[0];

    const _propertyName = functionName.slice(3); // still has an uppercase first letter
    const propertyName = _propertyName[0].toLowerCase() + _propertyName.slice(1);

    dataRef.current[propertyName] = data;

    functionItself(data, ...extra);
  };
