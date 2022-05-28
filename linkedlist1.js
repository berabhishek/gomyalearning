class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(arr) {
        this.head = new Node(arr[0]);
        let curr = this.head;
        for(let i = 1; i < arr.length; i++) {
            curr.next = new Node(arr[i]);
            curr = curr.next;
        }
        this.tail = curr;
    }

    printList() {
        let str_list = "";
        let curr = this.head;
        while (curr !== null) {
            str_list += curr.data + " -> ";
            curr = curr.next;
        }
        str_list += "null";
        console.log(str_list);
    }

    length() {
        let count = 1;
        let curr = this.head;
        while (curr !== null) {
            curr = curr.next;
            count += 1;
        }
        return count;
    }
    appendList(...items) {
        let curr = this.tail;
        for(let i = 0; i < items.length; i++) {
            curr.next =  new Node(items[i]);
            curr = curr.next;
        }
        this.tail = curr;
    }

    searchElement(target) {
        let curr = this.head;
        let count = 1;
        while (curr !== null) {
            if (curr.data === target) {
                return count;
            }
            count += 1;
            curr = curr.next;
        }
        return -1;
    }

    //deletes the head of LL
    deleteHead() {

    }

    //deletes the last element of LL
    deleteTail() {

    }

    //deletes (int)(length / 2) item of the 
    deleteMiddle() {

    }

    //deletes index-th element
    deleteFromIndex(index) {

    }

    //detects if LL contains a cycle
    detectCycle() {

    }

    //removes a cycle from LL, doesn't do anything if no cycle
    removeCycle() {
        
    }

    //reverses a linked list in place
    reverse() {

    }

    //reverses a LL in groups of k nodes
    reverseInNode(k) {

    }

    //merge sort the linkedlist
    sort() {

    }

    //separate the odd and the even numbers
    oddEven() {

    }


}

let ll = new LinkedList([1,2,3,4,5]); 
// ll.printList();
console.log(ll.searchElement(7));// -1
console.log(ll.searchElement(3));// 2

ll.appendList(7); //1,2,3,4,5,7
ll.appendList(9,10,11,12)// 1,2,3,4,5,7,9,10,11,12
ll.printList();
let newll = new LinkedList([4,3,2,1]);
newll.printList();
console.log(newll.searchElement(1));