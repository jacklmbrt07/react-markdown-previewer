import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

const marked = require("marked");

function App() {
  return <div className="App">
    <div>
      <FormGroup controlid='formControlsTextarea' >
        <FormLabel>Markdown Input</FormLabel>
        <FormControl componentClass='textarea' placeholder="Enter Markdown Text" ></FormControl>
      </FormGroup>
    </div>
  </div>;
}

export default App;
