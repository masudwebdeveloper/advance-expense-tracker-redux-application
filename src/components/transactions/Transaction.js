import React from "react";
import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import {
  editActive,
  removeTransaction,
} from "../../features/transaction/transactionSlice";
import { numberWithCommas } from "../../utils/numberWithCommas";

const Transaction = ({ transaction = {} }) => {
  const { name, amount, type, id } = transaction;
  const dispatch = useDispatch();
  const handleEditActive = () => {
    dispatch(editActive(transaction));
  };
  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button className="link" onClick={handleEditActive}>
          <img className="icon" src={editImage} alt="edit" />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={deleteImage} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
