import React from "react";

function App({ text }: { text?: string }) {
  return <div className="App">app2 Component rendered {text ?? ""}</div>;
}

export default App;
