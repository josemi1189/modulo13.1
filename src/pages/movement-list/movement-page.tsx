import { Layout } from "@/layout";
import "./movements-style.css";
import { getMovements, getAccountList } from "./api/movements-api";
import { AccountList, MovementsModel } from "./model.movement";
import { MovementRow } from "./movement-row";
import React from "react";

export const MovementListPage = () => {
  const [movements, setMovements] = React.useState<MovementsModel[]>([]);
  const [dataAccount, setDataAccount] = React.useState<AccountList>();

  React.useEffect(() => {
    const readMovements = async () => {
      getMovements("1").then((data) => {
        setMovements(data);
      });
    };

    const readDataAccount = async () => {
      const data = await getAccountList("1");
      setDataAccount(data[0]);
    };

    readMovements();
    readDataAccount();
  }, []);

  return (
    <Layout>
      <div id="movements-header">
        <span>Saldos y últimos movimientos</span>
        <div id="balance">
          <span>SALDO DISPONIBLE</span>
          <span>{dataAccount && dataAccount.balance}</span>
        </div>
      </div>
      <div className="iban">
        <span>Gastos mes</span>
        <span>{dataAccount && dataAccount.iban}</span>
      </div>
      <div id="movements">
        <div className="header-movements">
          <span>FECHA</span>
          <span>FECHA VALOR</span>
          <span>DESCRIPCIÓN</span>
          <span>IMPORTE</span>
          <span>SALDO DISPONIBLE</span>
        </div>

        {movements.map((movement) => (
          <MovementRow key={movement.id} {...movement} />
        ))}
      </div>
    </Layout>
  );
};
