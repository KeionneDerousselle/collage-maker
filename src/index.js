import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import 'jquery';
import './styles/collage-maker.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

render(
    <App />,
    document.getElementById('app')
);