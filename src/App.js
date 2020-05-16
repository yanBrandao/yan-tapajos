import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
import MiniDrawer from "./utils/MiniDrawer";

function App() {
    return (
        <Router>
            <div className="App">
                <MiniDrawer/>
                <Routes />
            </div>
        </Router>
    );
}

export default App;
