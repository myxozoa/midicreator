import { nanoid } from "nanoid";

export class Note {
  constructor(id, note, octave, start, duration, velocity = 128) {
    this.id = id;
    this.note = note;
    this.start = start;
    this.duration = duration;
    this.velocity = velocity;
    this.octave = octave;
  }
}

export function createNote(note, octave, start, duration, velocity = 128) {
  return new Note(nanoid(), note, octave, start, duration, velocity);
}
