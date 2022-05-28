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

    appendList(...arr) {
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
}

let ll = new LinkedList([1,2,3,4,5]); 
// ll.printList();
console.log(ll.searchElement(7));// -1
console.log(ll.searchElement(3));// 2

let newll = new LinkedList([4,3,2,1]);
newll.printList();
console.log(newll.searchElement(1));