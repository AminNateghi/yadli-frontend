import { Environment } from "src/app/shared/classes/environment";
import packageInfo from './../../package.json';

export const environment: Environment = {
  production: true,
  appVersion: packageInfo.version,
  apiUrl: 'https://yadli-api.herokuapp.com/api'
};
