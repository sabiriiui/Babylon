import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './sass/app.css';
import './sass/main.css';
import './sass/menu.css';
import './sass/pakageTile.css';
import './sass/smallscreen.css';
import "./sass/groupform.css";
import "./sass/language.css";
import "./sass/services.css";
import 'react-responsive-carousel/lib/styles/carousel.css';
import { HashRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
