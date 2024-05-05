var regStrip = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm;

var tcDefaults = {
  speed: 1.0, // default: 1.0
  displayKeyCode: 86, // default: V
  rememberSpeed: false, // default: false
  audioBoolean: true, // default: false
  startHidden: false, // default: false
  forceLastSavedSpeed: false, //default: false
  enabled: true, // default enabled true
  controllerOpacity: 0.5, // default: 0.3
  keyBindings: [
    { action: "display", key: 86, value: 0, force: false, predefined: true }, // V
    { action: "slower", key: 83, value: 0.1, force: false, predefined: true }, // S
    { action: "faster", key: 68, value: 0.1, force: false, predefined: true }, // D
    { action: "rewind", key: 90, value: 10, force: false, predefined: true }, // Z
    { action: "advance", key: 88, value: 10, force: false, predefined: true }, // X
    { action: "reset", key: 82, value: 1, force: false, predefined: true }, // R
    { action: "fast", key: 71, value: 2.4, force: false, predefined: true } // G
  ],
  blacklist: `www.instagram.com
    twitter.com
    imgur.com
    teams.microsoft.com
  `.replace(regStrip, "")
};
