import AppiumDriver from './AppiumDriver';

export default class IOSDriver extends AppiumDriver {
  launchApp(): void {
    console.log('Launching iOS session');
  }

  closeApp(): void {
    console.log('Closing iOS session');
  }
}
