
// import './belence.css'

import { useSelector } from "react-redux";


export default function Belence() {

  let transactions= useSelector((store)=>{
    return store.transaction.currentTransaction
  });

let income=0;
let addIncome=transactions.filter((item)=>{
 return item.amount>0;
})
for( let item of addIncome){
  income+=item.amount;
}


  return (
    <div className="container my-4 text-center" style={{ height: "40vh", width: "50vw", fontFamily: "sans-serif" }}>
      <div>
        <h3 style={{ fontSize: "20px" }}>Expense Tracker by Sameer Ahmad</h3>
        <h4 className="mt-2">CURRENT BALANCE</h4>
        <h3 style={{ fontSize: "20px" }}>${income}</h3>
      </div>

      <div
        className="mx-auto mt-4 p-3 border"
        style={{
          width: "380px",
          height: "120px",
          backgroundColor: "whitesmoke",
        }}
      >
        {/* <div style={{ height: "30px" }}></div> */}

        <div className="d-flex justify-content-center gap-4">
          <h3 style={{ fontSize: "20px" }}>Income</h3>
          <div
            style={{
              height: "60px",
              borderLeft: "1px solid rgb(83, 82, 82)",
            }}
          ></div>
          <h3 style={{ fontSize: "20px" }}>Expence</h3>
        </div>

        <div className="d-flex justify-content-center gap-5 mt-1">
          <h3 style={{ color: "#b6960a", marginTop: "-25px", marginBottom: "-25px", fontSize: "20px" }}>${income}</h3>
          <h3 style={{ color: "#2da3ad", marginTop: "-25px", marginBottom: "-25px", fontSize: "20px" }}>0.00</h3>
        </div>
      </div>
    </div>
  );
}
