import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const resultsData = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  });

  const valueElement = resultsData.map((resultsData) => {
    return (
      <tr key={resultsData.year}>
        <td>{resultsData.year}</td>
        <td>{formatter.format(resultsData.interest)}</td>
        <td>{formatter.format(resultsData.valueEndOfYear)}</td>
        <td>{formatter.format(resultsData.annualInvestment)}</td>
        <td>
          {formatter.format(
            resultsData.valueEndOfYear -
              resultsData.annualInvestment * resultsData.year -
              initialInvestment
          )}
        </td>
      </tr>
    );
  });

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
