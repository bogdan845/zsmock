import React from 'react';
import './App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import {AppRouting} from "./routes/AppRouting";

function App() {
    return (
        <Router>
            <div className="App">
                <AppRouting/>
            </div>
        </Router>
    );
}

export default App;
