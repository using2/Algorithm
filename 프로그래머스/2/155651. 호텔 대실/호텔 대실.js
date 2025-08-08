function solution(book_time) {
    const toMinutes = (time) => {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    };

    const bookings = book_time.map(([start, end]) => [toMinutes(start), toMinutes(end) + 10]);
    bookings.sort((a, b) => a[0] - b[0]); 
    
    const heap = [];

    for (let [start, end] of bookings) {
        if (heap.length > 0 && heap[0] <= start) {
            heap.shift(); 
        }
        heap.push(end);
        heap.sort((a, b) => a - b);
    }

    return heap.length; 
}
