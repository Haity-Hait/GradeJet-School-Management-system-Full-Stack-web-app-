import React, { useState } from "react";
import MainLayouts from "../../../layouts/Super Admin Layouts/MainLayouts";
import "./dashboard.css";
import { LuSchool } from "react-icons/lu";
import { MegaphoneIcon, MicrophoneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
const Dashboard = () => {
  let [amount, setAmount] = useState([])

  axios.get("http://localhost:1516/get/school").then((res) => {
    // console.log();
    setAmount(res.data.result)
  }).catch((err) => {
    console.log(err);
  })
  return (
    <MainLayouts>
      <div className=" px-3">
        <div className="flex fall justify-between items-center">
          <div className="blue p-3">
            <h1 className="wel">Welcome Back To GradeJet</h1>
          </div>
          <div className="sch">
            <LuSchool className="nan" />
            <p className=" mx-4">Total Number of Schools</p>
            <p className="ppaa ">{amount.length}</p>
          </div>
        </div>
        <div className=" mt-20">
            <div className="notice">
              <div className="nes">
                <p>Notice</p>
                <MegaphoneIcon className=" w-5" />
              </div>
            </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Dashboard;
