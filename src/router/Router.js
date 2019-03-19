import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import CreateEmail from '../components/CreateEmail';
import Email from '../components/Email';
import ViewEmail from '../components/ViewEmail';

const Router=()=>(
<BrowserRouter>
<div>
    <Switch>
        <Route path="/" component={Email} exact={true}></Route>
        <Route path="/create" component={CreateEmail} />  
        <Route path="/view_mail/:id" component={ViewEmail} />  
    </Switch>
</div>
</BrowserRouter>
)
export default Router;