import React, { Component } from 'react';
// import './App.css';
import {Provider} from 'react-redux';
import store from './store';


import Routes from './routes';

export default () => (
<Provider store={store} >
    <Routes/>
</Provider>
);

