function reverse(head: ListNode): ListNode {
  if (head.next === null) return head;
  let last = reverse(head.next);
  //1->2->3->4->5
  //第一次
  //1->2->1
  //1->null
  //第二次
  //2->3->4->5
  //2->3->2
  //2->null
  head.next.next = head;
  // @ts-ignore
  head.next = null;
  return last;
}

class ListNode {
  val: null;
  next: ListNode;

  constructor(val: any, next?: ListNode) {
    this.val = val === undefined ? null : val;
    // @ts-ignore
    this.next = next === undefined ? null : next;
  }
}

export class List {
  public length: number;
  private perCurrect: ListNode;
  private head: ListNode;
  private currect: ListNode;

  constructor(val: any) {
    this.head = new ListNode(val);
    this.currect = this.head;
    this.perCurrect = this.head;
    this.length = 1;
    return this;
  }

  public push(val: any) {
    this.currect.next = new ListNode(val);
    this.perCurrect = this.currect;
    this.currect = this.currect.next;
    this.length++;
    return this;
  }

  public map(callback: { (item: any): void; (arg0: null, arg1: number): any }) {
    let travelPtr = this.head;
    let index = 0;
    while (travelPtr && index < this.length) {
      const result = callback(travelPtr.val, index);
      if (result) {
        travelPtr.val = result;
      }
      index++;
      travelPtr = travelPtr.next;
    }
    return this;
  }

  public reverse() {
    this.currect = this.head = reverse(this.head);
    return this;
  }
}
