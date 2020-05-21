import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./routes";
import MiniDrawer from "./utils/MiniDrawer";
import {LanguageProvider} from "./utils/LanguageProvider";

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="App">
                    <MiniDrawer/>
                    <Routes />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
