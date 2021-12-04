import { Environment } from "src/app/shared/classes/environment";
import packageInfo from './../../package.json';

export const environment: Environment = {
  production: false,
  appVersion: packageInfo.version + '-dev',
  apiUrl: 'http://localhost:3000'
};
