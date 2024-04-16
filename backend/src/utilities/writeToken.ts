const fs = require('fs');

export const writeTokenToFile = (token: string): void => {
  let existingData: any = {};
  try {
    existingData = JSON.parse(fs.readFileSync('tokens.json'));
  } catch (error) {
    console.error('Error reading file:', error);
  }

  existingData.oauthToken = token;
  fs.writeFileSync('tokens.json', JSON.stringify(existingData, null, 2));
  console.log('Token written to file.');
}