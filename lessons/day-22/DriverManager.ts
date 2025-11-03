import AndroidDriver from './AndroidDriver';
import AppiumDriver from './AppiumDriver';
import IOSDriver from './IOSDriver';

export default class DriverManager {
  // Static là share resource, nếu để session đó là static thì khi chạy parallel thì nếu mà session khác bị ngắt là sẽ bị ngắt hết/ terminate
  static getAppiumDriver(platform: string): AppiumDriver {
    switch (platform) {
      case 'android':
        return new AndroidDriver();
      case 'ios':
        return new IOSDriver();
      default:
        throw new Error('Invalid platform');
    }
  }
}
