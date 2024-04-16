const fs = require('fs');

export const readTokenFromFile = (): string => {
    try {
      const data = fs.readFileSync('tokens.json', 'utf8');
      const token = JSON.parse(data).oauthToken;
      return token;
    } catch (error) {
      console.error('Error reading file:', error);
      return null;
    }
  }