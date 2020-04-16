import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          this.setState({ title: json.title })
        });
    }, 5000);
  }

  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="bt-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            title={this.state.title || "Fuck you"}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
