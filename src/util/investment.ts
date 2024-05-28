export interface InvestmentData {
  year: number;
  interest: number;
  totalInterest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}): InvestmentData[] {
  const annualData: InvestmentData[] = [];
  let investmentValue: number = initialInvestment;
  let totalInterest: number = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear: number = investmentValue * (expectedReturn / 100);
    totalInterest += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      totalInterest: totalInterest,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }

  return annualData;
}


export const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
