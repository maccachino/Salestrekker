import React from "react";

// styles
import "./IncomeDetails.css";
import "../Income/Income";

// bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// icons
import { TbMathSymbols } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";

const IncomeDetails = (props) => {
  // props
  // eslint-disable-next-line react/prop-types
  const { grossIncome, setGrossIncome, setKey } = props;

  // functions
  const handleChange = (e) => {
    setGrossIncome(e.target.value);
  };

  const calculate = () => {
    setKey("Income");
  };

  return (
    <div className="IncomeDetailsWrapper">
      <div className="IncomeDetailsHeader">
        <TbMathSymbols />
        <h3>Income tax calculator</h3>
      </div>
      <div className="TotalIncomeWrapper">
        <p>What is your total income?</p>
        <InputGroup className="mb-3">
          <div className="InputIcon">
            <BiDollar />
          </div>
          <Form.Control
            type="number"
            id="tax"
            value={grossIncome}
            onChange={handleChange}
            aria-label="Number input with dropdown button"
          />
          <div className="InputLabel rounded">
            <p>Weekly</p>
          </div>
        </InputGroup>
      </div>
      <div className="ButtonsWrapper">
        <button
          onClick={() => calculate()}
          className={`rounded shadow-sm ${
            grossIncome === "" ? "CalculateButton" : "CalculateButtonSuccess"
          }`}
        >
          Calculate
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default IncomeDetails;
