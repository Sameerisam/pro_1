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
    className="container text-center my-3"
    style={{ fontFamily: "sans-serif", maxWidth: "400px" }}
  >
    <h3 className="fs-5">Add New Transaction</h3>
    <hr />
    <h4 className="fs-6 text-start">Description</h4>
    <input
      type="text"
      placeholder="Detail of Transaction"
      className="form-control mb-2"
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
      }}
    />

    <h4 className="fs-6 text-start">Transaction Amount</h4>
    <input
      type="number"
      placeholder="Dollar value of Transaction"
      className="form-control mb-3"
      value={amount}
      onChange={(e) => {
        setAmount(Number(e.target.value));
      }}
    />

    <button
      className="btn w-100"
      style={{
        backgroundColor: "rgb(176, 196, 222)",
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