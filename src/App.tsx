import React from 'react';
import './App.scss';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import {AppRouting} from "./routes/AppRouting";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {GlobalStyles} from "./components/GlobalStyles";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <GlobalStyles/>
                    <AppRouting/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
