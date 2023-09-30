import React from "react";

function Component({ text }: { text: string }) {
  return <div className="App">app1 Component rendered {text ?? ""}</div>;
}

export default Component;
