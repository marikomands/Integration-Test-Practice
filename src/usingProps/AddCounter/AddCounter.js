import { useState } from "react";
import App from "./App";

export default function AddCounter({ initial = 0, onChange }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);
    onChange?.(newValue);
    // If onChange function is provided, call it with the new count value."?."
  };

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>

      <button onClick={handleIncrement}>Increment</button>

      {count >= 5 && <p data-testid="warning-message">High value!</p>}
    </div>
  );
}
