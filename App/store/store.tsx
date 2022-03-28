/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { lightTheme } from '../../styles/theme';

const Store = React.createContext({ dispatch: () => {}, globalState: lightTheme });
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }:any) => {
    const [globalState, dispatch]:any = React.useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ globalState, dispatch }}>{children}</Store.Provider>
    );
};
