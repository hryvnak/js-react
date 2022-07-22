import React from "react";

const Body = (props) => <div className="card-body">{props.children}</div>
const Title = (props) => <h4 className="card-title">{props.children}</h4>
const Text = (props) => <p className="card-text">{props.children}</p>

export default class Card4 extends React.Component{
  static Body = Body;
  static Title = Title;
  static Text = Text;

  render() {
    const { children } = this.props;
    return (
      <div className="card">{children}</div>
    )
  }
}