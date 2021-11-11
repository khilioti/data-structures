// What is Data Structure

// Array [1, 2, 3, 4]
// Object
// Set
// Map
// WeakMap, WeakSet

// Linked List
// [value, next] -> [value, next] -> [value, next]

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)
        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }
        this.tail = node
    }

    pripend(data) {
        const node = new Node(data, this.head)
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    }

    toArray() {
        let current = this.head
        const output = []
        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }

    find(data) {
        if (!this.head) {
            //throw new Error('empty array')
            return
        }

        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }
        // throw new Error('not fiend this data')
    }

    insertAfter(after, data) {
        const found = this.find(after)

        if (!found) {
            return
        }

        const node = new Node(data, found.next)
        found.next = node
    }

    remove(data) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if(this.tail.data === data) {
            this.tail = current
        }
    }
}


const list = new LinkedList()

list.append('my')
list.append('name')
list.pripend('Hi')
//list.append('is')
list.append('Nikita')
list.append('Khiliy')

list.insertAfter('name', 'is')

list.pripend(42)
list.append(24)

list.remove(42)
console.log(list.toArray())



