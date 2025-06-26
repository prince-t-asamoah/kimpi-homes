require('dotenv').config(); // Load .env file

const fs = require('fs');
const targetPath = './src/environments/environment.production.ts';
const envConfigFile = `
  import { AppEnvironments } from '../app/model/environments.model';

  export const environment = {
    production: true,
    appUrl: '${process.env.APP_URL || ''}',
    databaseUrl: '${process.env.DATABASE_URL || ''}',
    databaseKey: '${process.env.DATABASE_KEY || ''}',
  };
`;

fs.writeFileSync(targetPath, envConfigFile);
