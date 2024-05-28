import { useEffect, useState } from "react";
import { UserInput } from "./UserInput";
import { Table } from "./Table";
import { calculateInvestmentResults, InvestmentData } from "../util/investment";

export const Calculator = () => {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const [investmentResults, setInvestmentResults] = useState<InvestmentData[]>(
    []
  );

  const handleInputChange =
    (paramName: keyof typeof inputValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const numericValue = parseFloat(value);
      setInputValues((prevState) => ({
        ...prevState,
        [paramName]: numericValue,
      }));
    };

  useEffect(() => {
    const results = calculateInvestmentResults(inputValues);
    setInvestmentResults(results);
  }, [inputValues]);

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <UserInput
            text={"Initial Investment"}
            type="number"
            onChange={handleInputChange("initialInvestment")}
          />
          <UserInput
            text={"Annual Investment"}
            type="number"
            onChange={handleInputChange("annualInvestment")}
          />
        </div>
        
        <div className="input-group">
          <UserInput
            text={"Expected Return"}
            type="number"
            onChange={handleInputChange("expectedReturn")}
          />
          <UserInput
            text={"Duration"}
            type="number"
            onChange={handleInputChange("duration")}
          />
        </div>
      </section>

      <Table investmentResults={investmentResults} />
    </>
  );
};
