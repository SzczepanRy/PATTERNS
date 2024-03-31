class Settings {
  static instance: Settings; // track static instance
  public readonly mode = "dark";

  private constructor() {
    // private constructor enas that new wont work
  }
  static getInstatce(): Settings {
    if (!this.getInstatce) {
      this.instance = new Settings();
    }
    return this.instance;
  }
}

const settings = Settings.getInstatce();
