import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  //   constructor() {
  //     super();
  //     this.handleInceremnt =  this.handleInceremnt.bind(this);
  //   }

  render() {
    return (
      <div>
        <h4>#{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleInceremnt({ id: 1 })}>
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.props.onDelete}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  handleInceremnt = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDelete = () => {
    console.log("click delete btn");
  };

  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
