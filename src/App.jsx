import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="wrapper pt-5">
        <div class="container">
          <h1 class="text-center">Not To Do List</h1>
        </div>
      </div>
    </>
  );
}

export default App;
