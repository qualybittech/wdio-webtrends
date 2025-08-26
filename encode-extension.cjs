const fs = require('fs');
const path = require('path');

const extensionPath = path.resolve(__dirname, './my-extension/ve-extension-s34.zip');
const base64 = fs.readFileSync(extensionPath, { encoding: 'base64' });

fs.writeFileSync('ve-extension-s34-base64.txt', base64);
console.log('✅ Encoded extension saved to ve-extension-s34-base64.txt');
