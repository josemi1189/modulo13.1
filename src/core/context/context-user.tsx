import React from "react";

interface User {
   nombreUsuario: string;
   setNombreUsuario: (nombre: string) => void;
}

export const UserContext = React.createContext<User>({
   nombreUsuario: "",
   setNombreUsuario: () => {},
});

interface Props {
   children: React.ReactNode;
}

export const DataUserContext : React.FC<Props> = (props) => {
   const { children } = props;
   const [nombreUsuario, setNombreUsuario] = React.useState<string>("");


   return (
      <UserContext.Provider value={{ nombreUsuario, setNombreUsuario}}>
         { children }
      </UserContext.Provider>
   )

};