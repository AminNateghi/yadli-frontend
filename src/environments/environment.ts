import { Environment } from "src/app/shared/classes/environment";
import * as ver from './../../package.json';

export const environment: Environment = {
  production: false,
  appVersion: ver.version + '-dev',
  apiUrl: 'http://localhost:3000'
};
