import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Home from './Screens/Home';
import { StoreProvider, useStore } from './store/store';
import { themeReducer } from './store/changeThemeReducer';
import { lightTheme } from '../styles/theme';

const ThemedComponent = () => {
    const theme:any = useStore();
    return (
        <ThemeProvider theme={theme.globalState}>
            <Home />
        </ThemeProvider>
    );
};

const App = () => (
    <StoreProvider reducer={themeReducer} initialState={lightTheme}>
        <ThemedComponent />
    </StoreProvider>
);

export default App;
