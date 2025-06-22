import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const resultsData = calculateInvestmentResults(input);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;



  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest (Year)</th>
          <th>Investment Value</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{valueElement}</tbody>
    </table>
  );
}
