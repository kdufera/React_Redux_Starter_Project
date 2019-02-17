import React from 'react';
import {Router, Route} from 'react-router';

import App from './App';
import Temperature from './Conversion/Temperature/Termperature';
import NotFound from './Conversion/NotFound/NotFound';

const Routes = (props) => {return(
<Router {...props}>
        <Route path='/' component={Temperature}> </Route>
        <Route path='/*' component={NotFound}> </Route>
</Router>
)};
export default Routes;
