import React from 'react';
import logo from './logo.svg';
import './App.css';

class FullQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: "",
      quotesLength: 0,
      currentFullQuote: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          quotes: data,
          quotesLength: data.length,
          currentFullQuote: data[Math.floor(Math.random() * data.length)]
        })
      );
  }

  handleChange() {
    this.setState({
      currentFullQuote: this.state.quotes[
        Math.floor(Math.random() * this.state.quotesLength)
      ]
    });
  }

  render() {
    return (
      <div>
        <div className="box"><p id="text">{this.state.currentFullQuote["quote"]}</p>
          <p id="author">- {this.state.currentFullQuote["name"]}</p></div>
        <div className="buttons">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=\"${
            this.state.currentFullQuote["quote"]
          }\" - ${this.state.currentFullQuote["name"]}`}
            target="_blank"><i className="fa fa-twitter-square fa-3x"></i></a>
          <button className="btn btn-secondary" id="new-quote" onClick={this.handleChange}>Next</button>
        </div>
      </div>
    );
  }
}

export default FullQuote;
