// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    // return this.head
    return this.getAt(0)
  }

  getLast() {
    // if (!this.head) {
    //   return null
    // }
    //
    // let node = this.head
    // while (node) {
    //   if (!node.next) {
    //     return node
    //   }
    //   node = node.next
    // }
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    // if (!this.head) {
    //   return
    // }
    // this.head = this.head.next
    return this.removeAt(0)
  }

  removeLast() {
    // if (!this.head) {
    //   return
    // }
    // if (!this.head.next) {
    //   this.head = null
    //   return
    // }
    //
    // let node = this.head
    // let prevNode = {}
    // while (node.next) {
    //   if (!node.next) {
    //     prevNode.next = null
    //   }
    //   prevNode = node
    //   node = node.next
    // }
    // prevNode.next = null
    return this.removeAt(this.size() - 1)
  }

  insertLast(data) {
    // const lastNode = this.getLast()
    // if (lastNode) {
    //   lastNode.next = new Node(data)
    // }else{
    //   this.head = new Node(data)
    // }
    return this.insertAt(data, this.size())
  }

  getAt(index) {
    if (!this.head) {
      return null
    }
    let counter = 0
    let node = this.head
    while (node) {
      if (index === counter) {
        return node
      }
      node = node.next
      counter++
    }
    return null
  }

  removeAt(index) {
    if (!this.head) {
      return null
    }
    if (index === 0) {
      this.head = this.head.next
      return
    }
    const prevNode = this.getAt(index - 1)
    if (!prevNode || !prevNode.next) {
      return
    }
    prevNode.next = prevNode.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
    }
    const prevNode = this.getAt(index - 1) || this.getLast()
    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
  }

  forEach(func) {
    let node = this.head
    let counter = 0
    while (node) {
      func(node, counter)
      node = node.next
      counter++
    }
  }
}

module.exports = { Node, LinkedList };
