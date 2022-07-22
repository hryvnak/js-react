import React from "react"; // vs code додав сам

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
        <h4 className="card-title">Батько наш Бандера</h4>
        <p className="card-text">Україна мати</p>
        </div>
      </div>
    );
  }
}