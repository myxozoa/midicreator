export class Note {
  constructor(note, octave, start, duration, velocity = 128) {
    this.note = note;
    this.start = start;
    this.duration = duration;
    this.velocity = velocity;
    this.octave = octave;
  }
}