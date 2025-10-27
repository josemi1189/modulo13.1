import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { path } from './path';
import { LoginPage, NewAccount, AccountPage, AccountListPage, MovementListPage, Transfers } from '@/pages'


export const Router : React.FC = () => {

   return (
      <BrowserRouter>
         <Routes>
            <Route path={path.login} element={<LoginPage />} />
            <Route path={path.newAccount} element={<NewAccount />} />
            <Route path={path.editAccount} element={<AccountPage />} />
            <Route path={path.accountList} element={<AccountListPage />} />
            <Route path={path.movements} element={<MovementListPage />} />
            <Route path={path.transfers} element={<Transfers />} />
         </Routes>
      </BrowserRouter>
   );

}