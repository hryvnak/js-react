import React from "react";

export default class Definitions extends React.Component {
  render () {
    const { data } = this.props;
    return (data.length) ? (
      <dl>
        {
          data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <dt>{item.dt}</dt>
                <dd>{item.dd}</dd>
              </React.Fragment>
            )
          })
        }
      </dl>
    ) : null;
  }
}