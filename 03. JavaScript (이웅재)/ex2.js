const a = {};

console.log(a, typeof a);

const b = {
  name: "mark",
};

console.log(b, typeof b);

const c = {
  name: "Mark",
  hello1() {
    console.log("hello1", this);
  },
  hello2: function () {
    console.log("hello2", this);
  },
  hello3: () => {
    console.log("hello3", this.name);
  },
};

c.hello1();
c.hello2();
c.hello3();
