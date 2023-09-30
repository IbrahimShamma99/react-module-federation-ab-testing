import React from "react";

const variants = [
  React.lazy(() => import("app1/App")),
  React.lazy(() => import("app2/App")),
];

const Variant = ({ text }: { text: string }) => {
  const Component = variants[Math.floor(Math.random() * variants.length)];

  return <Component text={text} />;
};

function App() {
  return (
    <>
      <Variant text="+ loaded from Host" />
    </>
  );
}

export default App;
