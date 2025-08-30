import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const totalBudget = 10000;
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [travelAmount, setTravelAmount] = useState(0);
  const [shoppingAmount, setShoppingAmount] = useState(0);

  const handleChange = (e, setter) => {
    const value = parseInt(e.target.value) || 0;
    setter(value);
  };

  useEffect(() => {
    const totalExpenses = foodAmount + travelAmount + shoppingAmount;
    setRemainingAmount(totalBudget - totalExpenses);
  }, [foodAmount, travelAmount, shoppingAmount]);
  return (
    <>
      <div>
        <div>
          <h2>Budget Allocation</h2>
        </div>
        <div>
          <span>Total Budget</span>
          <span>{totalBudget}</span>
        </div>
        <div>
          <span>Remaining Amount</span>
          <span>{remainingAmount}</span>
        </div>
        <div>
          <span>Food</span>
          <span>{foodAmount}</span>
          <input
            type="text"
            value={foodAmount}
            onChange={(e) => handleChange(e, setFoodAmount)}
          />
        </div>
        <div>
          <span>Travel</span>
          <span>{travelAmount}</span>
          <input
            type="text"
            value={travelAmount}
            onChange={(e) => handleChange(e, setTravelAmount)}
          />
        </div>
        <div>
          <span>Shopping</span>
          <span>{shoppingAmount}</span>
          <input
            type="text"
            value={shoppingAmount}
            onChange={(e) => handleChange(e, setShoppingAmount)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
