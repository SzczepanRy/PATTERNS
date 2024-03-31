//inherits from an object that has already been created

const animal = {
  MakeSound() {
    return "sound";
  },
};

const dog = Object.create(animal, {
  Bark: {
    value: () => {
      return "bark";
    },
  },
});

console.log(dog.MakeSound());
console.log(dog.Bark());
