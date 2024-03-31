class Settings {
  private constructor() {
    // private constructor enas that new wont work
  }
  static instance: Settings; // track static instance
  public readonly mode = "dark";

  static getInstatce(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}

const settings = Settings.getInstatce();
