import React, { Component } from "react";
import { useState } from "react";
import "./app.css";

const App = () => {
  const [LoanAmount, setLoanAmount] = useState();
  const [dollor, setdollor] = useState();
  const [Rial, setRial] = useState();
  const [dinar, setdinar] = useState();
  const [derham, setderham] = useState();
  const [yoan, setyoan] = useState();
  const [euro, seteuro] = useState();
  const [ion, setion] = useState();
  const [resul, setresul] = useState();
  const handleChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleChange2 = (event) => {
    setresul(event.target.value);
  };

  const handleSubmit = (event) => {
    if (resul == "dollor") {
        setdollor(parseFloat(LoanAmount));
        setRial(parseFloat(LoanAmount) *(42245.00));
        setdinar(parseFloat(LoanAmount) *(1460));
        setderham(parseFloat(LoanAmount) *(367));
        setion(parseFloat(LoanAmount) *(113.51));
        setyoan(parseFloat(LoanAmount) *(6.4));
        seteuro(parseFloat(LoanAmount) *(0.87));
    }

    if (resul == "rial") {
        setdollor(parseFloat(LoanAmount)*0.000024);
        setRial(parseFloat(LoanAmount) );
        setdinar(parseFloat(LoanAmount) *(0.35));
        setderham(parseFloat(LoanAmount) *(0.000087));
        setion(parseFloat(LoanAmount) *(0.0027));
        setyoan(parseFloat(LoanAmount) *(0.00015));
        seteuro(parseFloat(LoanAmount) *(0.000021));
     


    }
    if (resul == "dinar") {
        setdollor(parseFloat(LoanAmount)*0.00068);
        setRial(parseFloat(LoanAmount)*28.93 );
        setdinar(parseFloat(LoanAmount) );
        setderham(parseFloat(LoanAmount) *(12.16));
        setion(parseFloat(LoanAmount) *(0.087));
        setyoan(parseFloat(LoanAmount) *(0.0044));
        seteuro(parseFloat(LoanAmount) *(0.000059));
    }

    if (resul == "derham") {
        setdollor(parseFloat(LoanAmount)*0.27);
        setRial(parseFloat(LoanAmount) *(11501.50));
        setdinar(parseFloat(LoanAmount) *(397.50));
        setderham(parseFloat(LoanAmount) );
        setion(parseFloat(LoanAmount) *(30.93));
        setyoan(parseFloat(LoanAmount) *(1.74));
        seteuro(parseFloat(LoanAmount) *(0.24));
    }
    if (resul == "ion") {
        setdollor(parseFloat(LoanAmount)*0.0088);
        setRial(parseFloat(LoanAmount) *(372.37));
        setdinar(parseFloat(LoanAmount) *(12.84));
        setderham(parseFloat(LoanAmount) *(0.032));
        setion(parseFloat(LoanAmount));
        setyoan(parseFloat(LoanAmount) *(0.056));
        seteuro(parseFloat(LoanAmount) *(0.0076));
    }

    if (resul == "youn") {
        setdollor(parseFloat(LoanAmount)*0.16);
        setRial(parseFloat(LoanAmount) *(6598.31));
        setdinar(parseFloat(LoanAmount) *(228.04));
        setderham(parseFloat(LoanAmount) *(0.57));
        setion(parseFloat(LoanAmount) *(17.75));
        setyoan(parseFloat(LoanAmount) );
        seteuro(parseFloat(LoanAmount) *(0.14));
    }
    if (resul == "euro") {
        setdollor(parseFloat(LoanAmount)*1.15);
        setRial(parseFloat(LoanAmount) *(4868.56));
        setdinar(parseFloat(LoanAmount) *(1682.49));
        setderham(parseFloat(LoanAmount) *(4.23));
        setion(parseFloat(LoanAmount) *(130.68));
        setyoan(parseFloat(LoanAmount) *(7.38));
        seteuro(parseFloat(LoanAmount));
    }

  
    if(document.getElementById('id1').value==''||document.getElementById('id2').value=="null")
    {alert("Please Enter the  All Values.");}
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="div1">
        <div class="input-group">
          <span className="span1">$</span>
          <input type="number" className="input1" id="id1" placeholder="Enter the Amount" onChange={handleChange}min="0"/>
        </div>
        <br/>

        <div class="input-group2">
          <select className="select" id="id2">
            <option value="null" selected >ارز را انتخاب کنید</option>
            <option onClick={handleChange2} value={"dollor"}>دلار  </option>
            <option onClick={handleChange2} value={"rial"}>ریال   </option>
            <option onClick={handleChange2} value={"youn"}>یوان   </option>
            <option onClick={handleChange2} value={"ion"}>ین      </option>
            <option onClick={handleChange2} value={"detham"}>درهم  </option>
            <option onClick={handleChange2} value={"dinar"}>دینار  </option>
            <option onClick={handleChange2} value={"euro"}>یورو  </option>
          </select>
        </div>

        <input type="submit" value="Result" className="submit" />
        <div id="result">
          <span className="span3">Derham:</span>
          <input type="text" className="input2" value={derham} disabled style={{position:"relative" , left:"-32px"}}/>
          <br />
          <span className="span3">Dollor :</span>
          <input type="text" className="input2"value={dollor} disabled   style={{position:"relative" , left:"-29px"}} />
          <br />

          <span className="span3">Dinarr :</span>
          <input type="text" className="input2" value={dinar} disabled   style={{position:"relative" , left:"-29px"}}/>
          <br />
          <span className="span3">Euro :</span>
          <input type="text" className="input2" value={euro} disabled  style={{position:"relative" , left:"-23px"}} />
          <br />
          <span className="span3">Rial :</span>
          <input type="text" className="input2"   value={Rial} disabled  style={{position:"relative" , left:"-22px"}}/>
          <br />

          <span className="span3">Yoan :</span>
          <input type="text" className="input2"   value={yoan} disabled   style={{position:"relative" , left:"-25px"}}/>
          <br />
          <span className="span3">Ion :</span>
          <input type="text" className="input2"   value={ion} disabled   style={{position:"relative" , left:"-19px"}} />
        </div>
      </div>
    </form>
  );
};

export default App;
