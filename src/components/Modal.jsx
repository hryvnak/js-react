import React from "react";
import cn from "classnames";

const Header = ({ toggle, children }) => {
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button onClick={ toggle } type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">x</span>
      </button>
    </div>
  )
}
const Body = (props) => <p className="modal-body">{ props.children }</p>
const Footer = (props) => <p className="modal-footer">{ props.children }</p>

export default class Modal extends React.Component{
  static defaultProps = {
    isOpen: false,
  };
  
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    const modalClass = cn(
     { modal: true,
      fade: isOpen,
      show: isOpen }
    )
    return (
      <div className={ modalClass } style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">{ children} </div>
        </div>
      </div>   
    )
  }
}