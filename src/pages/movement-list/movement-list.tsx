import { Layout } from "@/layout";
import "./movements-style.css";
import { getMovements } from "@/api/movements-api";
//import { MovementsModel } from "./model.movement";
import { MovementRow } from "./movement-row";
import React from "react";

export const MovementListPage = () => {
  //const [movements, setMovements] = React.useEffect();

  React.useEffect(() => {
    const readMovements = async () => {
      getMovements("1").then((response) => {
        console.log(response);
      });
    };
    readMovements();
  }, []);

  return (
    <Layout>
      <div id="movements-header">
        <span>Saldos y últimos movimientos</span>
        <div id="balance">
          <span>SALDO DISPONIBLE</span>
          <span>1490 €</span>
        </div>
      </div>
      <div className="iban">
        <span>Gastos mes</span>
        <span>ES91 2100 0418 4502 0005 1332</span>
      </div>
      <div id="movements">
        <div className="header-movements">
          <span>FECHA</span>
          <span>FECHA VALOR</span>
          <span>DESCRIPCIÓN</span>
          <span>IMPORTE</span>
          <span>SALDO DISPONIBLE</span>
        </div>

        <MovementRow
          accountId="1"
          amount={900}
          balance={1490}
          description="Nómina noviembre"
          id="1"
          realTransaction="09-12-2019UTC"
          transaction="09-12-2019UTC"
          key={1}
        />
      </div>
    </Layout>
  );
};
