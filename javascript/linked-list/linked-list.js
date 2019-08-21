var LinkedList = function(){
    this.head = null
    this.tail = null
    this.length = 0
}

LinkedList.prototype.push = function(value){
    let node = new Node(value)
    if(this.head == null){
        this.head = node
        this.tail = node
    }else{
        node.previous = this.tail
        this.tail.next = node
        this.tail = node
    }
    this.length += 1
}

LinkedList.prototype.unshift = function(value){
    let node = new Node(value)
    if(this.head == null){
        this.head = node
        this.tail = node
    }else{
        this.head.previous = node
        node.next = this.head
        this.head = node
    }
    this.length += 1
}

LinkedList.prototype.shift = function(){
    let value = null
    if(this.head.next == null){
        value = this.head.value
        this.head = null
        this.tail = null
    }else{
        value = this.head.value
        this.head.next.previous = null
        this.head = this.head.next
    }
    if(value != null){ this.length -= 1 }
    return value
}

LinkedList.prototype.pop = function(){
    let value = null
    if(this.tail == null){
        
    }else if(this.tail.previous == null){
        value = this.tail.value
        this.head = null
        this.tail = null
    }else{
        value = this.tail.value
        this.tail.previous.next = null
        this.tail = this.tail.previous
    }
    if(value != null){ this.length -= 1 }
    return value
}

LinkedList.prototype.delete = function(valueToDelete){
    let first = this.head

    while(first.next != null){
        if(first.value == valueToDelete && first.previous == null){
            this.shift()
        }else if(first.value == valueToDelete){
            first.next.previous = first.previous
            first.previous.next = first.next
            this.length -= 1
            break
        }
        first = first.next
    }

    if(first.next == null && first.value == valueToDelete){
        this.pop()
    }
}

LinkedList.prototype.count = function(){
    return this.length
}


var Node = function(value){
    this.next = null
    this.previous = null
    this.value = value
}

export {
    LinkedList
}