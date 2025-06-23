import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import UserInput from "./components/UserInput/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 7000,
    annualInvestment: 2300,
    expectedReturn: 4,
    duration: 11,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && (
        <p className="center">The duration must be positive than zero</p>
      )}
    </>
  );
}

export default App;
