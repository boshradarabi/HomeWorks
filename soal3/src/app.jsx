import React, { Component } from "react";
import { useState } from "react";
import "./app.css";

const App = () => {
  const [show1, toggleShow1] = React.useState(false);
  const [show2, toggleShow2] = React.useState(false);
  const [show3, toggleShow3] = React.useState(false);
  const [show4, toggleShow4] = React.useState(false);
  const [show5, toggleShow5] = React.useState(false);
  const [show6, toggleShow6] = React.useState(false);
  const [show7, toggleShow7] = React.useState(false);
  return (
    <div className="div1">
      <div className="div">
        <span className="span"style={{ position: "relative", left: "7px" }}onClick={() => toggleShow1(!show1)}>
          شنبه 22 آبان{" "}</span>
        <br />
        <div className="div3">{show1 ? "5:30" : "5:30"} </div>
        <div>
          {show1 && ( <div className="div-details">
              صبح: <span className="sobh">05:30</span> <br />
              طلوع :<span className="tolo">06:54</span> <br />
              ظهر: <span className="zohr">12:09</span> <br />
              عصر: <span className="asr">15:02</span><br />
              غروب:<span className="ghorob">17:23</span><br />
              مغرب<span className="maghreb"> 17:41</span><br />
              عشا: <span className="esha"> 18:29</span><br />
              نیمه شب: <span className="nime">23:26</span><br/>
            </div>)}
        </div>
      </div>

      <div className="div">
        <span className="span" style={{ position: "relative", left: "2px" }}onClick={() => toggleShow2(!show2)} >
          یکشنبه 23 ابان{" "} </span>
        <br />
        <div className="div3">{show2 ? "5:31" : "5:31"}</div>
        <div>
          {show2 && ( <div className="div-details">
           
              صبح: <span className="sobh">05:31</span>  <br />
              طلوع :<span className="tolo">06:55</span> <br />
              ظهر: <span className="zohr">12:09</span> <br />
              عصر: <span className="asr">15:02</span>  <br />
              غروب:<span className="ghorob">17:22</span><br />
              مغرب<span className="maghreb"> 17:41</span><br />
              عشا: <span className="esha"> 18:28</span><br />
              نیمه شب: <span className="nime">23:26</span> <br/>
            </div>)}
        </div>
      </div>

      <div className="div">
        <span className="span" style={{ position: "relative", left: "0px" }} onClick={() => toggleShow3(!show3)} >
          دوشنبه 24 ابان</span>
        <br />
        <div className="div3">{show3 ? " 5:31" : " 5:31"}</div>
        <div>
          {show3 && ( <div className="div-details">
              صبح: <span className="sobh">05:31</span> <br />
              طلوع :<span className="tolo">06:56</span>  <br />
              ظهر: <span className="zohr">12:09</span> <br />
              عصر: <span className="asr">15:01</span> <br />
              غروب:<span className="ghorob">17:21</span> <br />
              مغرب<span className="maghreb"> 17:40</span> <br />
              عشا: <span className="esha"> 18:28</span> <br />
              نیمه شب:<span className="nime">23:26</span>  <br/>
            </div>)}
        </div>
      </div>

      <div className="div">
        <span className="span"style={{ position: "relative", left: "2px" }}onClick={() => toggleShow4(!show4)}>
          سه شنبه 25 ابان </span>
        <br />
        <div className="div3">{show4 ? " 5:32" : " 5:32"}</div>
        <div>{show4 && ( <div className="div-details">
             
              صبح: <span className="sobh">05:32</span> <br />
              طلوع :<span className="tolo">06:57</span> <br />
              ظهر: <span className="zohr">12:09</span> <br />
              عصر: <span className="asr">15:01</span> <br />
              غروب:<span className="ghorob">17:21</span> <br />
              مغرب<span className="maghreb"> 17:40</span> <br />
              عشا: <span className="esha"> 18:27</span> <br />
              نیمه شب: <span className="nime">23:27</span> <br/>
            </div>)}
        </div>
      </div>

      <div className="div">
        <span className="span"style={{ position: "relative", left: "1px" }} onClick={() => toggleShow5(!show5)}>
          چهارشنبه 26 ابان</span>
        <br />
        <div className="div3">{show5 ? " 5:33" : " 5:33"}</div>
        <div>{show5 && (<div className="div-details">
         
              صبح: <span className="sobh">05:33</span><br/>
              طلوع :<span className="tolo">06:58</span><br/>
              ظهر: <span className="zohr">12:09</span><br/>
              عصر: <span className="asr">15:00</span><br/>
              غروب:<span className="ghorob">17:20</span> <br/>
              مغرب<span className="maghreb"> 17:39</span><br/>
              عشا: <span className="esha"> 18:27</span><br/>
              نیمه شب: <span className="nime">23:27</span><br/>
            </div>
          )}
        </div>
      </div>

      <div className="div">
        <span className="span"style={{ position: "relative", left: "0px" }}onClick={() => toggleShow6(!show6)}>
          پنج شنبه 27 ابان</span>
        <br/>
        <div className="div3"> {show6 ? " 5:34" : " 5:34"}</div>
        <div>
          {show6 && (<div className="div-details">
             
              صبح: <span className="sobh">05:34</span><br />
              طلوع :<span className="tolo">06:59</span><br />
              ظهر: <span className="zohr">12:10</span><br />
              عصر: <span className="asr">15:00</span><br />
              غروب:<span className="ghorob">17:20</span><br />
              مغرب<span className="maghreb"> 17:39</span><br />
              عشا: <span className="esha"> 18:27</span><br />
              نیمه شب:<span className="nime">23:27</span><br/>
            </div>)}
        </div>
      </div>
      <div className="div">
        <span className="span" style={{ position: "relative", left: "1px" }} onClick={() => toggleShow7(!show7)} >
          جمعه 28 ابان</span>
        <br />
        <div className="div3"> {show7 ? " 5:35" : " 5:35"} </div>
        <div> 
          {show7 && (  <div className="div-details">
              صبح: <span className="sobh">05:35</span> <br />
              طلوع :<span className="tolo">07:00</span>  <br />
              ظهر: <span className="zohr">12:10</span> <br />
              عصر: <span className="asr">15:00</span> <br />
              غروب:<span className="ghorob">17:19</span><br />
              مغرب<span className="maghreb"> 17:38</span><br />
              عشا: <span className="esha"> 18:26</span><br/>
              نیمه شب:<span className="nime">23:27</span><br/>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
