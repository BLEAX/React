import React, { Component } from "react";

export default class RList extends Component {
  render() {
    const items = this.props.items.split(",");
    const itemsObj = items.map((e) => {
      return <li>{e}</li>;
    });
    let title = this.props.title;
    if (!title) title = "LIST";
    return (
      <div>
        <h3>{title}</h3>
        <ul>{itemsObj}</ul>
      </div>
    );
  }
}
