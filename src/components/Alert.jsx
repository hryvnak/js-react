import React from "react";
import cn from 'classnames';

export default class Alert extends React.Component{
	render() {
		const {type} = this.props;
		const alertClass = cn('alert', `alert-${type}`);
		return (
			<div className={alertClass} role="alert">This is a {type} alert—check it out!</div>
		)
	}
}