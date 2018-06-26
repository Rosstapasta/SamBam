import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import Home from './comps/home/Home.js';

export default class Router extends Component{
    render(){
        return(
            <Switch>
                <Route path='/' component={ Home }/>
            </Switch>
        )
    }
}