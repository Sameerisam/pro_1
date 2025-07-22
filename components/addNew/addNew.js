// import './addNew.css'
'use client';
import { addTransaction } from "@/store/reducer/transaction";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddNew() {
   let dispatch=useDispatch();
   const [description,setDescription]=useState("");
   const [amount,setAmount]=useState("");


   function sendData(){
    dispatch(addTransaction({description:description,amount:amount}))
    setDescription("");
    setAmount("")
   }


  return (
    <div
      className="mx-auto"
      style={{
        width: "20vw",
        height: "30vh",
        fontFamily: "sans-serif",
      }}
    >
      <h3 className="text-center fs-5">Add New Transaction</h3>
      <hr />
      <h4 className="fs-6">Description</h4>
      <input
        type="text"
        placeholder="Detail of Transaction"
        className="form-control mb-2"
        style={{ width: "270px", height: "30px" }}
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
      />

      <h4 className="fs-6">Transaction Amount</h4>
      <input
        type="number"
        placeholder="Dollar value of Transaction"
        className="form-control"
        style={{ width: "270px", height: "30px" }}
        value={amount}
        onChange={(e)=>{
          setAmount(Number(e.target.value))
        }}
      />

      <div style={{ height: "15px" }}></div>

      <button
        className="btn"
        style={{
          backgroundColor: "rgb(176, 196, 222)",
          width: "274px",
          height: "35px",
          fontSize: "1.1rem",
          color: "white",
          border: "none",
        }}
        onClick={sendData}
      >
        Add Transaction
      </button>
    </div>
  );
}
