import React from "react";
import classes from "./account-row.module.css";
import { Account } from "./account-model";
import { generatePath, useNavigate } from "react-router-dom";
import { path } from "@/core/routes";

interface Props {
  accountList: Account[];
}

export const AccountRow: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { accountList } = props;

  const ACTION_NONE = "";
  const ACTION_TRANSFER = "1";
  const ACTION_MOVEMENTS = "2";

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    switch (e.target.value) {
      case ACTION_MOVEMENTS:
        navigate(generatePath(path.movements, { id: id }));
        break;
      case ACTION_TRANSFER:
        navigate(generatePath(path.transfersFromAccount, { id: id }));
        break;
    }
  };

  const formatDate = (value: string): string => {
    return value.toString().padStart(2, "0");
  };

  const getDate = (value: Date) => {
    const date = new Date(value);
    const formatted = `
        ${formatDate(date.getDate().toString())}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    return formatDate(formatted);
  };

  return (
    <>
      {accountList.map((account) => (
        <div key={account.id} className={classes.rowMovements}>
          <span>{account.iban}</span>
          <span>{account.name}</span>
          <span className={account.balance < 0 ? classes.valueNegative : ""}>
            {account.balance}
          </span>
          <span>{getDate(account.lastTransaction)}</span>
          <select
            className="select"
            onChange={(e) => {
              handleSelectedOptionChange(e, account.id);
            }}
          >
            <option value={ACTION_NONE}>Seleccionar...</option>
            <option value={ACTION_MOVEMENTS}>Movimientos</option>
            <option value={ACTION_TRANSFER}>Transferir</option>
          </select>
        </div>
      ))}
    </>
  );
};
