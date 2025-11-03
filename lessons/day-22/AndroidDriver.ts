import AppiumDriver from './AppiumDriver';

export default class AndroidDriver extends AppiumDriver {
  launchApp(): void {
    console.log('Launching android session');
  }

  closeApp(): void {
    console.log('Closing android session');
  }
}
