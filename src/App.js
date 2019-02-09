import React, { Component } from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clarck",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const listService = {
  getNumItems(list) {
    return list.length;
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div># Items: {listService.getNumItems(this.state.list)}</div>
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
            <span>
              <ExplainBindingsComponent />
            </span>
          </div>
        ))}
      </div>
    );
  }
}

class ExplainBindingsComponent extends Component {
  onClickMe() {
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.onClickMe.bind(this)} type="button">
        Click Me
      </button>
    );
  }
}

export default App;
