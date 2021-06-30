/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Buttons_ from './topics/Buttons_';
import {name as appName} from './app.json';
import textinput from './topics/textinput';
import indicator from './topics/indicator';
import pickerex from './topics/pickerex';
import SwitchExample from './topics/SwitchExample';
import WebView_ from './topics/WebView_';
import MyApp from './topics/MyApp';
import App from './topics/App'
import FetchData from './topics/FetchData';

AppRegistry.registerComponent(appName, () => FetchData);
