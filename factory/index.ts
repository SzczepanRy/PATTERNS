//insted of the new keyword use a function or method to do it

class XButton {}
class YButton {}

//without factory
let choice = "x";
const button1 = choice == "x" ? new XButton() : new YButton();
const button2 = choice == "x" ? new XButton() : new YButton();

//with
class ButtonFactory {
  createButton(choice: string): XButton | YButton {
    if (choice == "x") {
      return new XButton();
    } else {
      return new YButton();
    }
  }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(choice);
const btn2 = factory.createButton(choice);
