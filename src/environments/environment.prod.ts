import { Environment } from "src/app/shared/classes/environment";
import * as ver from './../../package.json';

export const environment: Environment = {
  production: true,
  appVersion: ver.version,
  apiUrl: 'http://server-name.com/api'
};
