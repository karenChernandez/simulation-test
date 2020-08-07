import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AddInv from './Components/addInv/AddInv';
import Dashboard from './Components/dashboard/Dashboard';


export default(
    <Switch>
        <Route exact path ='/' component={Dashboard}/>
        <Route path='/AddInv' component={AddInv}/>
        <Route path='/Edit/:id' component={AddInv}/>
    </Switch>
    
)