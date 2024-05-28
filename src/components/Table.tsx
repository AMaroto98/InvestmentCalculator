import { formatter, InvestmentData } from "../util/investment";

export const Table = ({ investmentResults }: { investmentResults: InvestmentData[] }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result, index) => (
          <tr key={index}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.valueEndOfYear - result.totalInterest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
