import React from "react";
import Component from "./component";

function App({ text }: { text?: string }) {
  return (
    <div className="App">
      <Component text={text ?? ""} />
    </div>
  );
}

export default App;
