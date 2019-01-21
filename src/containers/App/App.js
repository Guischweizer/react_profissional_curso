import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "../Routes";
import { Provider } from "react-redux";
import store from "../../store";

const App = () => (
    <Provider store={store}>
        <div>
            <CssBaseline />
            <Router>
                <Routes />
            </Router>
        </div>
    </Provider>
);

export default App;
