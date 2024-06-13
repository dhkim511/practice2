class Stack {
  constructor() {
    this.storage = {}; // 스택의 저장소를 객체로 초기화
    this.count = 0;  // 스택의 크기를 나타내는 count를 0으로 초기화
  }
  
  // 스택의 크기를 반환하는 메서드
  size() {
    return this.count;
  }
  
  // 스택에 새로운 값을 추가하는 메서드
  push(value) {
    this.storage[this.count++] = value; // 현재 count 위치에 값을 저장하고 count를 1 증가시킴
  }
  
  // 스택에서 값을 제거하고 반환하는 메서드
  pop() {
    if (this.count === 0) return undefined;// 스택이 비어 있는 경우 undefined를 반환
    const result = this.storage[--this.count];// count를 1 감소시킨 후 그 위치의 값을 result에 저장
    delete this.storage[this.count];// 사용한 위치의 값을 삭제
    return result;// 제거된 값을 반환
  }
}

const stackInstance = new Stack();

stackInstance.push("A");
stackInstance.push("B");
console.log(stackInstance.pop());
console.log(stackInstance.size());
