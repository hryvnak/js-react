import React from "react";
import { ThemeContext, themes } from "../themes";
import ThemedSection from "./ThemedSection";

export default class App2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      textButton: 'Ніч'
    }
  }

  toggleTheme = () => {
    const {theme, textButton} = this.state;
    this.setState(
      {
        theme: (theme === themes.light) ? themes.dark : themes.light, 
        textButton: (textButton === 'Ніч' ? 'День' : 'Ніч')
      })
    console.log(this.state.theme)
  }

  render() {
    const { theme, textButton } = this.state;
    return (
      <ThemeContext.Provider value={ theme }>
        <Toolbar />
        <button onClick={ this.toggleTheme }>{ textButton }</button>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <ThemedSection />
  );
}