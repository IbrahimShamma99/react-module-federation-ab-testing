import React from "react";

const App1 = React.lazy(() => import("app1/App"));
const App2 = React.lazy(() => import("app2/App"));

function App() {
  return (
    <>
      <App1 />
      <App2 />
    </>
  );
}

export default App;
