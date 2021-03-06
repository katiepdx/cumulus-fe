import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import DetailPage from './DetailPage.js';
import FavoritePage from './FavoritePage.js';
import About from './About.js';
import SearchPage from './SearchPage.js';
import './App.css';

export default class App extends Component {

    state = {
        token: localStorage.getItem('TOKEN'),
    }

    handleToken = (token) => {
        this.setState({ token: token })
        localStorage.setItem('TOKEN', token)
    }

    clearToken = () => {
        this.setState({ token: '' })
        localStorage.setItem('TOKEN', '')
    }

    render() {

        return (
            <div className="App">
                <Router>
                    <div className="Nav-Links">
                        <Link home-links to='/'>Home</Link>
                        {
                            this.state.token &&
                            <div>
                                <Link home-links to='/SearchPage'>Search</Link>
                                <Link home-links to='/FavoritePage'>Favorites</Link>
                            </div>
                        }
                        <Link to='/About'>About</Link>
                    </div>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            render={(routerProps) => <Home handleToken={this.handleToken} {...routerProps} />}
                        />
                        <Route
                            path='/SearchPage'
                            exact
                            render={(routerProps) => <SearchPage token={this.state.token} {...routerProps} />}
                        />
                        <Route
                            path='/DetailPage/:id'
                            exact
                            render={(routerProps) => <DetailPage token={this.state.token} {...routerProps} />}
                        />
                        <Route
                            path='/FavoritePage'
                            exact
                            render={(routerProps) => <FavoritePage token={this.state.token} {...routerProps} />}
                        />
                        <Route
                            path='/About'
                            exact
                            render={(routerProps) => <About {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}
