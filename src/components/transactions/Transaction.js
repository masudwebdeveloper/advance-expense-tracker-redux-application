import React from "react";
import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";

const Transaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
        <button className="link">
          <img className="icon" src={editImage} alt="edit" />
        </button>
        <button className="link">
          <img className="icon" src={deleteImage} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
