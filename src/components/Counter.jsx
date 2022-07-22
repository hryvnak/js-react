import React from "react";
import { last, uniqueId } from 'lodash';

// Моє рішення (логи зявляються зверху вниз, а не навпаки, я вже не виправляла)
export default class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  handleIncrement = (e) => {
    e.preventDefault();
    const { items } = this.state;
    const lastItem = last(items);
    const newValue = (lastItem) ? (lastItem.value + 1) : 1;
    const newItem = {value: newValue, id: uniqueId('id_')}
    this.setState(({ items }) => ({ items: [...items, newItem] }));
  }
  handleDecrement = (e) => {
    e.preventDefault();
    const { items } = this.state;
    const lastItem = last(items);
    const newValue = (lastItem) ? (lastItem.value - 1) : -1;
    const newItem = {value: newValue, id: uniqueId('id_')}
    this.setState(({ items }) => ({ items: [...items, newItem] }));
  }

  renderLogs() {
    const { items } = this.state;
    console.log('items', items)
    if (items.length === 0) {
      return null;
    }
    return (
      <div className="list-group">
        {
          items.map(({ value, id }) => {
            return ( <button onClick={this.removeLog(id)} key={id} type="button" className="list-group-item list-group-item-action">{value}</button> )
          })
        }
      </div>
    )
  }

  removeLog = (id) => (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({items: newItems})
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button onClick={this.handleIncrement} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.handleDecrement} type="button" className="btn hexlet-dec">-</button>
        </div>
        { this.renderLogs() }
      </div>
    )
  }
}

// А тут є вирази, як у рішенні вчителя, думаю, це є рішення вчителя, або майже воно

/* export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  removeLog = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);

    this.setState({
      items: newItems,
    });
  };

  handleIncrease = () => this.handleCount(1);

  handleDecrease = () => this.handleCount(-1);

  handleCount(value) {
    this.setState(({ items }) => {
      const newValue = _.get(items, [0, 'value'], 0) + value;
      const newItem = { id: _.uniqueId(), value: newValue };

      return {
        items: [newItem, ...items],
      };
    });
  }

  renderLogs() {
    const { items } = this.state;
    if (items.length === 0) {
      return null;
    }

    return (
      <div className="list-group">
        {items.map(({ id, value }) => (
          <button
            key={id}
            onClick={this.removeLog(id)}
            type="button"
            className="list-group-item list-group-item-action"
          >
            {value}
          </button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button onClick={this.handleIncrease} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.handleDecrease} type="button" className="btn hexlet-dec">-</button>
        </div>
        {this.renderLogs()}
      </div>
    );
  }
} */