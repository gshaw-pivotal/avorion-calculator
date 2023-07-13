import React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import TabGroupComponent from "./TabGroupComponent";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <AppHeader/>
                <TabGroupComponent/>
            </ThemeProvider>
        </div>
    );
}

export default App;
