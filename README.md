# website-popup
to stop f**king around with time
# Custom Popup Chrome Extension

This Chrome extension displays a custom popup on specified websites.

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome or any other browser and navigate to `chrome://extensions/`.(Tested and works on Chrome, Brave, Edge)
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. X is added as default, after enabling the extension and giving the required permissions, popup will be shown.

## File Structure

- `manifest.json`: Extension configuration
- `popup.html`: HTML for the extension popup
- `background.js`: Background script for monitoring tabs
- `content.js`: Script injected into web pages to display the popup

## Customization

To customize the popup content, edit the `content.js` file. You can modify the HTML structure, styling, and behavior of the popup as needed.
To add more websites, you can change it in manifest.json by adding website's url![Untitled](https://github.com/blitzboah/website-popup/assets/146631108/59b92149-c734-4eea-8e3e-5a9b9e3986be)
![image](https://github.com/blitzboah/website-popup/assets/146631108/5a6474ef-d80d-4cf8-b10b-5a1b600be189)

You can also change image as well, just rename it as popup.png or change it as you like but have to make change in code as well.
 

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
