const fs = require('fs');
const path = require('path');

// Example package.json content
const packageJsonContent = {
  name: "@ace-spel/ace-builds",
  version: "0.0.1"
};

// Function to write package.json to the specified file path
function writePackageJson(filePath) {
  const fullPath = path.resolve(filePath, 'package.json');
  
  fs.writeFile(fullPath, JSON.stringify(packageJsonContent, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('package.json has been written to', fullPath);
  });
}

// Take the file path from the command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as the first argument.');
  process.exit(1);
}

writePackageJson(filePath);
