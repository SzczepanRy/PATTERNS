// middleman that prevents collisions

class Airplane {
  land() {}
}
class Runway {
  clear: boolean;
}

//mediator
class Tower {
  clearForLanding(runway: Runway, plane: Airplane) {
    if (runway.clear) {
      plane.land();
    }
  }
}
const tower = new Tower();

const runway1 = new Runway();
const runway2 = new Runway();
const runway3 = new Runway();

const plane1 = new Airplane();
const plane2 = new Airplane();
const plane3 = new Airplane();

tower.clearForLanding(runway1, plane1);
tower.clearForLanding(runway2, plane2);
tower.clearForLanding(runway3, plane3);
