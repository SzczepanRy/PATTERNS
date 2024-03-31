//object behaves diffrently based on the number of states

class Human {
  //switch hell
  // think(mood) {
  //   switch (mood) {
  //     case "happy":
  //       return "i am happy";
  //     case "sad":
  //       return "i am sad";
  //     case "neutral":
  //       return "i am neutral";
  //   }
  // }
  state: State;
  constructor() {
    this.state = new HappyState();
  }
  think() {
    return this.state.think();
  }
}

interface State {
  think(): string;
}

class HappyState implements State {
  think(): string {
    return "i am happy";
  }
}
class SadState implements State {
  think(): string {
    return "i am sad";
  }
}
class NeurtalState implements State {
  think(): string {
    return "i am neurtal";
  }
}
