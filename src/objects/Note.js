export class Note {
  constructor(start, end, velocity = 128) {
    this.start = start;
    this.end = end;
    this.velocity = velocity;
  }
}