import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/app';
import {appStore} from './store/configurestore';
import './styles/main.sass';

import '!file-loader?name=[name].[ext]!./images/ace-builder1.png';
import '!file-loader?name=[name].[ext]!./images/ace-builder2.png';
import '!file-loader?name=[name].[ext]!./images/ace-builder3.png';
import '!file-loader?name=[name].[ext]!./images/node-list1.png';
import '!file-loader?name=[name].[ext]!./images/node-list2.png';
import '!file-loader?name=[name].[ext]!./images/node-list3.png';
import '!file-loader?name=[name].[ext]!./images/file-browser1.png';

import '!file-loader?name=[name].[ext]!./images/file-browser3.png';
import '!file-loader?name=[name].[ext]!./images/file-browser4.png';

ReactDOM.render(
<Provider store={appStore}>
    <App />
    </Provider>
    , document.getElementById('app'));
