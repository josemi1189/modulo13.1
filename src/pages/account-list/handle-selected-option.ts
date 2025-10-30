import React from 'react';
import { generatePath } from "react-router-dom";
import { path } from "@/core/routes";
import { useNavigate } from "react-router-dom";
  
  export const ACTION_NONE = "";
  export const ACTION_TRANSFER = "1";
  export const ACTION_MOVEMENTS = "2";
  
  export const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {

    const navigate = useNavigate();
    
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

  export const getDate = (value: Date) => {
    const date = new Date(value);
    const formatted = `
        ${formatDate(date.getDate().toString())}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    return formatDate(formatted);
  };

