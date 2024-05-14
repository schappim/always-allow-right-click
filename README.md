# Always Allow Right Click

A Chrome extension that ensures right-clicking and text selection are always enabled, even if overridden by the web designer.

## Features

- Always allow right-click on any webpage
- Enable text selection on restricted pages

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right.
4. Click "Load unpacked" and select the directory containing the extension files.

## Files

- `manifest.json`: The extension manifest file.
- `content.js`: The content script to enable right-click and text selection.
- `background.js`: The background script to handle extension activation.
- `popup.html`: An optional popup for manual activation.
- `icons/`: Directory containing extension icons (`icon16.png`, `icon48.png`, `icon128.png`).

## Usage

1. Install the extension as described above.
2. The extension will automatically enable right-click and text selection on all pages.
3. Alternatively, you can manually enable it by clicking the extension icon in the Chrome toolbar.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

