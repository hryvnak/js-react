import React from "react";
import cn from 'classnames';

export default class Collapse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      opened: this.props.opened,
    }
  }

  toggleText = (e) => {
    e.preventDefault();
    const { opened } = this.state;
    this.setState({opened: !opened});
  }

  render() {
    const { text } = this.props;
    const { opened } = this.state;
    const classes = {
      collapse: true,
      show: opened
    }
    return (
      <div>
        <p>
          <a onClick={this.toggleText} href="#" className="btn btn-primary">Link with href</a>
        </p>
        <div className={cn({...classes})}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}
Collapse.defaultProps = { text: 'default text', isOpened: false}