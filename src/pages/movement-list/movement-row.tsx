import React from "react";
import { MovementsModel } from "./model.movement";

export const MovementRow: React.FC<MovementsModel> = (props) => {
  const { description, amount, balance, transaction, realTransaction } = props;

  return (
    <div className="row-movements">
      <span>{transaction.slice(0, 10)}</span>
      <span>{realTransaction.slice(0, 10)}</span>
      <span>{description}</span>
      <span className={amount < 0 ? "value-negative" : ""}>{amount}</span>
      <span className={balance < 0 ? "value-negative" : ""}>{balance}</span>
    </div>
  );
};
