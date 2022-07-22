import React from "react"; // vs code додав сам
import getCard from "../getCard";

export default class Card2 extends React.Component {
  render() {
    const result = getCard({ title: 'шо по русні?', text: 'русні пизда' });
    return result;
  }
}