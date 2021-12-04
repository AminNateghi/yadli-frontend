import { Environment } from "src/app/shared/classes/environment";
import packageInfo from './../../package.json';

export const environment: Environment = {
  production: true,
  appVersion: packageInfo.version,
  apiUrl: 'http://server-name.com/api'
};
