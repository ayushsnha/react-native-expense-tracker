/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

import { lightTheme, darkTheme } from '../../styles/theme';

export const changeTheme = (theme) => ({
    type: 'CHANGE_THEME',
    theme,
});

export const themeReducer = (state = lightTheme, action) => {
    // console.log(action.type);
    if (action.type === 'CHANGE_THEME') {
        return state.mode === 'light' ? darkTheme : lightTheme;
    }
    return state;
};
