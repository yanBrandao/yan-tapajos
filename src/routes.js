import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './utils/history';
import Home from './pages/Home'
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Games from "./pages/Games";
import Contacts from "./pages/Contacts";
import Knowledge from "./pages/Knowledge";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/games" exact component={Games} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/contacts" exact component={Contacts} />
                    <Route path="/knowledge" exact component={Knowledge} />
                </Switch>
            </Router>
        )
    }
}