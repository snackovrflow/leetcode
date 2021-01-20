class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function deleteNode(nodeToDelete) {
    let nextNode = nodeToDelete.next;
    if (nextNode) {
      nodeToDelete.value = nextNode.value;
      nodeToDelete.next = nextNode.next;
    } else {
      throw new Error("Can't delete last node with this technique")
    }
  
  }
  
  