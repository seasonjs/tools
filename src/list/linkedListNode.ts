export default class LinkedListNode {
  value: any;
  next: any;

  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback: (arg0: any) => any) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
