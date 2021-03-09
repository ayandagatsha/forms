import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeading] = React.useState();
  function handleChange() {
    setName(event.target.value);
  }

  function submitName(event) {
    setHeading(name);

    //for forms
    event.preventDefault; 
  }

  return (
    <div className="container">
      <form onSubmit={submitName}>
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
