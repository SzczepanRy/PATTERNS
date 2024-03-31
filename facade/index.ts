//hides low level details in the codebase

class XSystem {
  setX(X: number) {}
  turnOn() {}
  turnOff() {}
}

class YSystem {
  setY(Y: number) {}
  turnOn() {}
  turnOff() {}
}

class MainSystem {
  private x = new XSystem();
  private y = new YSystem();

  public turnOnSystem() {
    this.x.setX(200);
    this.x.turnOn();
    this.y.setY(200);
    this.y.turnOn();
  }
  public shutdown() {
    this.x.turnOff();
    this.y.turnOff();
  }
}
//hides details
const client = new MainSystem();
client.turnOnSystem();
client.shutdown();
