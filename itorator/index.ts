//going thru a collection of objects

let arr = ["A", "B", "C"];

for (let item of arr) {
  console.log(item);
}

function range(start: number, end: number, step = 1) {
  return {
    //allows for use of for of
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { dane: true, value: end };
    },
  };
}
//pull based system
for (const n of range(0, 100, 5)) {
  console.log(n);
}
