export const msToPx = () => {

}

export const pxToMs = () => {
  
}

export class KeyPress {
  static keys = [];

  static init(){
      document.addEventListener('keydown', (event) => {
          if (!this.keys.includes(event.key)){
              this.keys.push(event.key);
          }
      });

      document.addEventListener('keyup', (event) => {
          const index = this.keys.findIndex((key) => key === event.key);

          if (index !== -1){
              this.keys.splice(index, 1);
          }
      });
  }

  static isKeyPressed(key){
      return this.keys.includes(key);
  }

  static getKeysPressed() {
    return this.keys;
  }
}
