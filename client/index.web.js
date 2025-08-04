/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import appConfig from './app.json';

const appName = appConfig.name;

// Register the app for web
AppRegistry.registerComponent(appName, () => App);

// Run the app in the browser
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
