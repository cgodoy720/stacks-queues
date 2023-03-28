class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class Stack {
    constructor(top=null){
        this.top = top
    }

    push(data){
        // Create new instance of Node class using data passed in
        const newItem = new Node(data)

        // newItem.next will point to previous top
        newItem.next = this.top

        // New top will be the newItem Node we created
        this.top = newItem
    }

    isEmpty(){
        return this.top === null
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack is empty!')
        } else {
            return this.top
        }
    }

    pop(){
        // Create newItem to hold current top
        let newItem = this.top

        // Update this.top to be newItem.next
        this.top = newItem.next

        // Return newItem which is previous top
        return newItem
    }


    toArray(){
        // Initialize new empty array
        const arr = []

        // Initialize current var to be this.top
        let current = this.top

        // While current is truthy (not null)
        while(current){
            // Push current.data into arr
            arr.push(current.data)

            // Update current to be the next Node
            current = current.next
        }

        // Return arr
        return arr
    }
}

const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];


const stack = new Stack()

// Pushing a single Node onto our stack
// stack.push('First Month')
// console.log(stack)

// Pushing a second Node onto our stack which points to our previous top ('First Month')
// stack.push('Second Month')
// console.log(stack)


months.forEach(month => {
    stack.push(month)
})

// Console log second Node
// console.log(stack.top.next)
// Console log Oct
// console.log(stack.top.next.next.data)

// console.log(stack.peek())

// console.log('-----')

console.log(stack.toArray())
console.log(stack)
// console.log(stack.peek())





