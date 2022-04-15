class Node {
    constructor() {
        this.data = undefined;
        this.next = undefined;
    }
}

let head = undefined;

function insterFirst(data) {
    let temp = new Node();
    temp.data = data;

    temp.next = head;
    head = temp;
}

function printList() {
    let ptr = head;
    let arr = [];
    while(ptr != undefined) {
        arr.push(ptr.data);
        ptr = ptr.next;
    }
    console.log(arr);
}

insterFirst(5);
insterFirst(6);
printList();