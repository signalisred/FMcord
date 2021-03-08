/**
 * An array with a getter of a random value.
 * @public 
 */

class List extends Array {
  
  constructor(...args) {
    super(...args);
  }

  get random() {
    return this[Math.floor(Math.random() * this.length)];
  }
  
  get one() {
    return this[0];
  }
}

module.exports = List;