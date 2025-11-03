export default abstract class AppiumDriver {
  // dùng abstract khi muốn Strongly force Is A relationship
  abstract launchApp(): void;
  abstract closeApp(): void;
}
