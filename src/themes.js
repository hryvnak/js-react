import React from "react";

export const themes = {
  light: {
    background: "#eee",
    color: "black"
  },
  dark: {
    background: "black",
    color: "#eee"
  }
}

export const ThemeContext = React.createContext(themes.dark);