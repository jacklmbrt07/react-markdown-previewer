import "./App.css";
import React, { Component } from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

const marked = require("marked");

class App extends Component {
  state = {
    markdown: "",
  };
  updateMarkdown = function (markdown) {
    this.setState({ markdown });
  };
  render() {
    let { markdown } = this.state;
    console.log(markdown);

    return (
      <div className="App">
        <div>
          <FormGroup controlid="formControlsTextarea">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl
              as="textarea"
              rows={5}
              placeholder="Enter Markdown Text"
              value={markdown}
              onChange={(event) => this.updateMarkdown(event.target.value)}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
      </div>
    );
  }
}

export default App;
