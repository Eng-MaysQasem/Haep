class MinHeap {
    constructor() {
        this.heap = []; // Initialize the heap array
    }

    // Get the index of the parent node
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child node
    leftChild(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child node
    rightChild(index) {
        return 2 * index + 2;
    }

    // Swap elements at indices i and j
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value); // Add the new value to the end of the heap
        this.heapifyUp(this.heap.length - 1); // Maintain heap property by moving up the new value
    }

    // Maintain the heap property after insertion
    heapifyUp(index) {
        while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
            this.swap(this.parent(index), index); // Swap with the parent if the current value is smaller
            index = this.parent(index); // Move up to the parent's index
        }
    }

    // Remove the minimum element (root) from the heap
    removeMin() {
        if (this.heap.length === 0) return null; // If heap is empty, return null
        const root = this.heap[0]; // The root element (minimum)
        this.heap[0] = this.heap.pop(); // Replace root with the last element and remove the last element
        this.heapifyDown(0); // Maintain heap property by moving down the new root
        return root;
    }

    // Maintain the heap property after removing the minimum element
    heapifyDown(index) {
        let smallest = index; // Assume current index is the smallest
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        // Check if the left child is smaller than the current smallest
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        // Check if the right child is smaller than the current smallest
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        // If the smallest element is not the current index, swap and continue heapifying
        if (smallest !== index) {
            this.swap(index, smallest); // Swap with the smallest child
            this.heapifyDown(smallest); // Continue heapifying from the new position
        }
    }

    // Get the minimum element (root) of the heap
    getMin() {
        return this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}
