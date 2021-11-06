import React, { Component } from "react";
import { useState } from "react";
import "./app.css";

const App = () => {
  const [LoanAmount, setLoanAmount] = useState();
  const [Interest, setInterest] = useState();
  const [years, setyears] = useState();
  const [Totalpayment, setTotalpayment] = useState();
  const [MonthlyPayment, setMonthlyPayment] = useState();

  const handleChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleChange2 = (event) => {
    setInterest(event.target.value);
  };

  const handleChange3 = (event) => {
    setyears(event.target.value);
  };

  const handleSubmit = (event) => {
   const m=years*12;
    const result =( parseInt(LoanAmount) * parseInt(Interest)* (parseInt(years)*12+1) /2400)+ parseInt(LoanAmount);
    if(document.getElementById('id1').value==''||document.getElementById('id2').value==''||document.getElementById('id3').value=='')
{alert("Please Enter All the Values.");}
  

    setTotalpayment(result);

    setMonthlyPayment(result/m);

    event.preventDefault();
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className="div1">
        <div class="input-group">
          <span className="span1">$</span>
          <input type="number" className="input1" id="id1" placeholder="Loan Amount" onChange={handleChange} min="0"/>
        </div>

        <br />

        <div class="input-group2">
          <span className="span2">%</span>
          <input type="number" className="input2" id="id2"  onChange={handleChange2} placeholder="Interest" min="0" />
        </div>

         <input  className="input4" type="text" id="id3" onChange={handleChange3} placeholder="Years To Repay" />
        <br />

        <input className="sumbit" type="submit" value="Calculate" />
        <br />

        <div>
          <h3> Result</h3>
          <div>
            <span className="span3">Monthly Payment</span>
            <input className="input5" type="text" placeholder="" value={MonthlyPayment}/>
          </div>
          <div>
            <span className="span3"> Total-payment</span>
            <input className="input6" type="text" value={Totalpayment}placeholder=""/>
          </div>
        </div>
      </div>
    </form>
  );
};

export default App;
