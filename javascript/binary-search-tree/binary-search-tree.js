//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(root) {
    this.root = new Node(root)
  }

  get data() {
    return this.root.data
  }
  get right() {
    return this.root.right
  }

  get left() {
    return this.root.left
  }

  insert(value) {
    
    let node = new Node(value)
    searchPosForInsertion(this.root, node)
  }
}

function recordAllData(root){
  let result = []
  
  const inorder = function(root){
    if(root != null){
      inorder(root.left)
      result.push(root.data)
      inorder(root.right)
    }
  }
  inorder(root)
  return result
}

function searchPosForInsertion(root, node){
  if(root.right == null && node.data > root.data){
    root.right = node
  }else if(root.left == null && node.data <= root.data){
    root.left = node
  }else{
    if(node.data <= root.data){
      searchPosForInsertion(root.left, node)
    }else{
      searchPosForInsertion(root.right, node)
    }
  }
}

class Node {
  constructor(value){
    this.right = null
    this.left = null
    this.data = value
  }
}
