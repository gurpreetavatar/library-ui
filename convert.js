const fs = require('fs');
const path = require('path');

// Read your token JSON file
const tokensFilePath = path.join(__dirname, 'tokens.json'); // update the filename here if necessary
const scssOutputFilePath = path.join(__dirname, 'build/_variables.scss');

// Function to convert JSON tokens to SCSS variables
function jsonToScss(json, prefix = '') {
  let scssVariables = '';

  // Recursively go through JSON keys
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      let value = json[key];

      // Handle nested JSON
      if (typeof value === 'object' && !value.$value) {
        // Recursion for nested objects
        scssVariables += jsonToScss(value, `${prefix}-${key}`);
      } else if (value.$value) {
        // Convert $value to SCSS variable
        scssVariables += `$${prefix}-${key}: ${value.$value};\n`;
      }
    }
  }

  return scssVariables;
}

// Main function
function convertJsonToScss() {
  // Read and parse the JSON file
  const rawJson = fs.readFileSync(tokensFilePath, 'utf8');
  const jsonTokens = JSON.parse(rawJson);

  // Convert JSON tokens to SCSS format
  const scssVariables = jsonToScss(jsonTokens.core, 'core');

  // Write SCSS variables to the output file
  fs.writeFileSync(scssOutputFilePath, scssVariables);
  console.log(`SCSS variables generated successfully at: ${scssOutputFilePath}`);
}

// Call the conversion function
convertJsonToScss();
