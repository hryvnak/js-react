import React from "react"
import { ThemeContext } from "../themes";

export default class ThemedSection extends React.Component{
  static contextType = ThemeContext;
  
  render() {
    return (
      <section theme={this.context} style={{backgroundColor: this.context.background, color: this.context.color}}>
        <h1>Текст</h1>
      </section>
    )
  }
}