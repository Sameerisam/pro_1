'use client';
import { removeTransaction } from "@/store/reducer/transaction";
import { useDispatch, useSelector } from "react-redux";

export default function History() {
  let dispatch=useDispatch();
  const transactions = useSelector((store) => store.transaction.currentTransaction);

  let removeKray=(index)=>{
    dispatch(removeTransaction(index))
  }

  return (
     <div className="container text-center my-3" style={{ fontFamily: "sans-serif" }}>
      <h3>Transaction History</h3>
      <hr />

      <div className="d-flex flex-column align-items-center">
        {[...transactions].reverse().map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center border rounded px-3 py-2 mb-2 w-50 transaction-box"
            style={{
              backgroundColor: "#f9f9f9",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e3f2fd"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f9f9f9"}
          >
            <div className={item.amount > 0 ? "text-success" : "text-danger"}>
              {item.description}: <strong>${item.amount}</strong>
            </div>
            <button
              onClick={() => removeKray(transactions.length - 1 - index)} // reverse index
              className="btn btn-sm btn-outline-danger ms-3"
              style={{ fontWeight: "bold" }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}