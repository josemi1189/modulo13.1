import React from "react";

import "@/assets/css/style.css";
import { DataUserContext } from "./core/context";
import { Router } from '@/core/routes';

export const App: React.FC = () => {
  return (
    <DataUserContext>
      <Router />
    </DataUserContext>
  )
};
