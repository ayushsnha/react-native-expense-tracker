import 'styled-components';

declare module '@env' {
    // export const TMDB_API_URI: string;
    // export const TMDB_API_KEY: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    SECONDARY_TEXT_COLOR: string;
    PRIMARY_BUTTON_COLOR: string;
    SECONDARY_BUTTON_COLOR: string;
  }
}
