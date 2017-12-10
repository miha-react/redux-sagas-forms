import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

//import Home from '../containers/WrappedHome';
import Test from './Test';
import Home from './Home';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/1" component={Test} />
        </Switch>
    </BrowserRouter>
);
