import React, { useState } from "react";

// styles
import "./Dashboard.css";

// components
import IncomeDetails from "../IncomeDetails/IncomeDetails";
import Income from "../Income/Income";

// bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Dashboard = () => {
  // states
  const [grossIncome, setGrossIncome] = useState('');
  const [key, setKey] = useState('IncomeDetails');

  return (
    <div className="container py-3 w-1/2 shadow rounded">
      <Tabs
        id="IncomeDetailsTabs"
        className="mb-3"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="IncomeDetails" title="Income Details">
          <IncomeDetails
            grossIncome={grossIncome}
            setGrossIncome={setGrossIncome}
            setKey={setKey}
          />
        </Tab>
        <Tab eventKey="Income" title="Income">
          <Income 
            grossIncome={grossIncome} 
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
