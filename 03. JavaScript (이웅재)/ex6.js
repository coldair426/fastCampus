class A {
  static age = 28;
  static hello() {
    console.log(A.age);
  }
}
console.log(A, A.age);
A.hello();

class B {
  age = 39;
  static hello() {
    console.log(this.age);
  }
}

console.log(B, B.age);
B.hello();

class C {
  static name = "이 클래스의 이름을 C가 아니다.";
}

console.log(C);
