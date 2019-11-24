import React from 'react';
import logo from './logo.svg';
import marked from 'marked';
import './App.css';

const initial = `# Markdown previewer
## A freeCodeCamp project

You can use this tool to preview the result of applying markdown formatting. With markdown formatting you can easily apply a range of styles to your copy.

Instead of for instance writing \`<h1>Markdown previewer</h1>\` you can instead simply write \`# Markdown previewer\`.

You can share big snippets of code.

\`\`\`
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Initial'
    };
\`\`\`



 You can generate a blockquote.

> Quoting a very smart person.

* You can
* generate a list
* of items

**Or apply bold styling to some text.**

Markdown has a long list of features. [Click here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for the full documentation on how to apply markdown formatting.

![Markdown logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Markdown logo")`

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initial,
    };
    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
}
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  createMarkup() {
      return {__html: marked(this.state.input)};
    }

  render() {
    return (
      <div id="markdown">
        <div class="container">
          <p class="container__title">Editor</p>
          <textarea id="editor" rows="40" columns="80" onChange={this.handleChange} value={this.state.input}/>
        </div>
        <div class="container">
          <p class="container__title">Preview</p>
        <p id="preview" dangerouslySetInnerHTML={this.createMarkup()}/>
        </div>
        </div>
    )
  }
}

export default Markdown;
