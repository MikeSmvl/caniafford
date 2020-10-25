import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'views/Home/Home';
import Blog from 'views/Blog/Blog';
import NotFound from 'views/NotFound/NotFound';

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}
