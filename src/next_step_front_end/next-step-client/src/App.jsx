import React from "react";
import "./App.css";

function App() {
  let input = ""; // Biến thông thường
  return (
    <div>
      <input 
        type="text" 
        value={input} // Không cập nhật được giá trị nhập vào
        onChange={(e) => input = e.target.value} // Không trigger re-render
      />
      <button onClick={() => console.log(input)}>Log Input</button>
    </div>
  );
}

export default App;
