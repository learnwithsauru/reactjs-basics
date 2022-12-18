import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Footer() {
  return (
    <div>
      <h3>Footerd</h3>
    </div>
  );
}

function App() {
  // state --> useState hooks
  const [qty, setQty] = useState(0);

  // arrow function
  const handleIncrease = () => {
    setQty(qty + 1);
  };

  const handleDecrease = () => {
    setQty(qty - 1);
  };

  return (
    <>
      <div className="App">
        <h1>Count App</h1>

        <button onClick={() => handleDecrease()}>-</button>
        {qty}
        <button onClick={() => handleIncrease()}>+</button>
      </div>

      <Footer />
    </>
  );
}

export default App;
