
class Queue {
  constructor() {
    this.storage = {}; // 큐의 요소들을 저장
    this.front = 0; // 큐의 앞쪽 인덱스
    this.end = 0; // 큐의 끝쪽 인덱스
  }

  // 큐의 크기를 반환하는 메서드
  size() {
    return this.end - this.front;
  }

  // 큐에 요소를 추가하는 메서드
  enqueue(value) {
    this.storage[this.end++] = value; // 요소를 storage 객체에 저장하고 end 인덱스를 증가
  }

  // 큐에서 요소를 제거하고 반환하는 메서드
  dequeue() {
    if (this.size() === 0) return undefined; // 큐가 비어있으면 undefined를 반환
    const result = this.storage[this.front]; // front 인덱스의 요소를 result에 저장
    delete this.storage[this.front++];  // front 인덱스의 요소를 삭제
    return result; // 제거된 요소를 반환
  }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
