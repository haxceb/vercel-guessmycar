import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CategoryCard from '../Client/Components/Categories/categoryCard';
import HomePage from '../Client/Screens/HomePage';


const MainRoute = () => {
    return (
        <Router>
            <Route to="/" component={HomePage} />
            <Route to="/hello" component={CategoryCard} />
        </Router>
    )
}

export default MainRoute;