import React from "react";

// styles
import "./Income.css";

// icons
import { TbMathSymbols } from "react-icons/tb";

const Income = (props) => {
  // props
  // eslint-disable-next-line react/prop-types
  const { grossIncome } = props;

  return (
    <div className="IncomeWrapper">
      <div className="IncomeHeader">
        <TbMathSymbols />
        <h3>Your tax</h3>
      </div>
      <div className="AmountWrapper">
        <div className="Amount rounded">
          <span>{grossIncome}</span>
        </div>
        <p>your gross weekly income</p>
      </div>
      <div className="TableWrapper rounded">
        <table>
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Gross Income</th>
              <th>Tax</th>
              <th>Net Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekly</td>
              <td>${grossIncome}</td>
              <td>${(grossIncome * 20) / 100}</td>
              <td>${grossIncome - (grossIncome * 20) / 100}</td>
            </tr>
            <tr>
              <td>Fortnightly</td>
              <td>${grossIncome * 2}</td>
              <td>${(grossIncome * 2 * 20) / 100}</td>
              <td>${(grossIncome - (grossIncome * 20) / 100) * 2}</td>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>${grossIncome * 4}</td>
              <td>${(grossIncome * 4 * 20) / 100}</td>
              <td>${(grossIncome - (grossIncome * 20) / 100) * 4}</td>
            </tr>
            <tr>
              <td>Annually</td>
              <td>${grossIncome * 48}</td>
              <td>${(grossIncome * 48 * 20) / 100}</td>
              <td>${(grossIncome - (grossIncome * 20) / 100) * 48}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Income;
