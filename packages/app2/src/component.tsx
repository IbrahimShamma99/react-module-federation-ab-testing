import React from "react";

function Component({ text }: { text: string }) {
  return <div className="App">app2 Component rendered {text ?? ""}</div>;
}

export default Component;
