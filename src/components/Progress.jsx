import React from "react";

export default class Progress extends React.Component {
  render() {
    const percentage = this.props.percentage;
    const divStyle = {
        width: `${percentage}%`
    }
    return (
      <div className="progress">
        <div 
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
          style={divStyle}
        ></div>
      </div>
    )
  }
}