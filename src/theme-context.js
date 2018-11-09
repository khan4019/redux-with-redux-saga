import React from 'react';

export const themes = {
    dark:{
        color:'lightgray'
    },
    light:{
        color:'yellow'
    }
}

export const ThemeContext = React.createContext(
    themes.light // default context
)