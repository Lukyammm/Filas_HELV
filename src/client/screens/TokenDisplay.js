import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Navbar from "../components/Navbar";
import DBody from "../components/DBody";
import Slider from "../components/Slider";
import Marquee from "../components/Marquee";
import BillNumber from "../components/BillNumber";

const ENDPOINT = "http://desktop-8560w:8080/";

export default function TokenDisplay() {
  // const socket = socketIOClient(ENDPOINT);
  // const localMsg = localStorage.getItem("msg");
  // const [msg, setMsg] = useState(JSON.parse(localStorage.getItem("msg")));
  // socket.on("getmsg", (data) => {
  //   console.log(JSON.parse(data));
  //   setMsg(JSON.parse(data));
  // });
  // const [msg, setMsg] = useState([]);

  // useEffect(() => {
  // const socket = socketIOClient(ENDPOINT);
  // socket.on("getmsg", (data) => {
  //   console.log(JSON.parse(data));
  //   setMsg(JSON.parse(data));
  // });
  // }, []);

  return (
    <div className="app">
      <div className="appc">
        <Navbar />
      </div>
      <div className="appc">
        {/* <DBody /> */}
        <Slider />
        <BillNumber />
        {/* <div className="bill-view">
          <h1 style={{ marginTop: 10 }}>Bill Number</h1>
          <p>Amal</p>
          <p>Amal</p>
          <p>Amal</p>
          <p>Amal</p>
        </div> */}
      </div>
      <div className="appc">
        <Marquee />
      </div>
    </div>
  );
}
