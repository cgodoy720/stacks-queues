class Node {
    constructor(data){
        this.data = data
        this.next = null
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

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(data){
        const newItem = new Node(data)
        // If there is no first
        if(!this.first){
            // Set this.first to be newItem
            this.first = newItem
            // Set this.last to be newItem
            this.last = newItem
        } else {
            // Update previous this.last's next pointer to newItem
            this.last.next = newItem
            // Update this.last to be newItem
            this.last = newItem
        }
        return ++this.size
    }

    isEmpty(){
        return !this.first
    }

    dequeue(){
        // Remove the first Node in queue
        this.first = this.first.next
        this.size--
    }

}


const queue = new Queue()

queue.enqueue('Last Last')
queue.enqueue('Get in Line')
queue.enqueue('X Gon\' Give It To Ya')
queue.enqueue('Make it Rain')

queue.dequeue()
console.log(queue)





