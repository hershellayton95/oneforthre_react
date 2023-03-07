import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [value, setValue] = useState("");
  const [paragraph, setParagraph] = useState("");
  const handleSubmit = () => {
    setParagraph(value);
  };
  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="inserisci un nome"
          name="name"
          onChange={handleChange}
          value={value}
        />
        <Button onClick={handleSubmit}>Button</Button>
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default App;
