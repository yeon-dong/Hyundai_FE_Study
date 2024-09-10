import React, { useState } from "react";

function App() {
  const [text, setText] = useState("sample");
  const changeText = () => {
    setText((prev) => prev + "text");
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: "red" }}>
        App
      </div>
      <div>{text}</div>
      <button onClick={changeText}>값 바꾸기</button>
    </>
  );
}

export default App;
