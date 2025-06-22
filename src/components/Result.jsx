import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const value = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  });

  const valueElement = value.map((value) => {
    return (
      <tr key={value.year}>
        <td>{value.year}</td>
        <td>{formatter.format(value.interest)}</td>
        <td>{formatter.format(value.valueEndOfYear)}</td>
        <td>{formatter.format(value.annualInvestment)}</td>
        <td>
          {formatter.format(
            value.valueEndOfYear -
              value.annualInvestment * value.year -
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
