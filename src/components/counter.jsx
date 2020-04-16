import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <span className="badge">{this.props.title}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn-warning btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.props.onDelete} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
