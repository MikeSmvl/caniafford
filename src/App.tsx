import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'views/Home/Home';
import Blog from 'views/Blog/Blog';
import NotFound from 'views/NotFound/NotFound';
import Article from 'views/Article/Article';

export default function App() {
    return (
        <Router>
            <div id="App">
                <Navbar />
                <div id="Switch">
                    <Switch>
                        <Route
                            exact
                            path="/blog/:article"
                            component={Article}
                        />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/404" component={NotFound} />
                        <Route>
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
