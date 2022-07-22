import React from "react";
import cn from 'classnames';

export default class BtnGroup2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  selectLeft = () => {
    this.setState({active: 'left'})
  }
  selectRight = () => {
    this.setState({active: 'right'})
  }

  render() {
    const classes = {'btn': true, 'btn-primary': true};
    return (
      <div className="btn-group" role="group">
        <button 
          type="button"
          onClick={this.selectLeft}
          className={cn({...classes, active: this.state.active === 'left'})}
        >
          Left
        </button>
        <button 
          type="button"
          onClick={this.selectRight}
          className={cn({...classes, active: this.state.active === 'right'})}
        >
          Right
        </button>
      </div>
    )
  }
}