import React from "react";
import classes from "./account-row.module.css";
import { Account } from "./account-model";

export const AccountRow: React.FC<Account> = (props) => {
  const { iban, name, balance, lastTransaction, id /*, type*/ } = props;

  const formatDate = (value: string): string => {
    return value.toString().padStart(2, "0");
  };

  const [fullDate, setFullDate] = React.useState("");

  React.useEffect(() => {
    const date = new Date(lastTransaction);
    const formatted = `
      ${formatDate(date.getDate().toString())}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    setFullDate(formatDate(formatted));
  }, []);

  return (
    <div key={id} className={classes.rowMovements}>
      <span>{iban}</span>
      <span>{name}</span>
      <span className={balance < 0 ? classes.valueNegative : ""}>
        {balance}
      </span>
      <span>{fullDate}</span>
      <select defaultValue={0}>
        <option value={0}>Seleccionar...</option>
        <option>Movimientos</option>
        <option>2</option>
      </select>
    </div>
  );
};
