import React, { useContext } from "react";
import "./layout-style.css";
import { UserContext } from "@/core/context";
import { Navbar } from "@/components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import { path } from "@/core/routes";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const { nombreUsuario, setNombreUsuario } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setNombreUsuario("");
    navigate(path.login);
  };
  return (
    <div className="container" key={"Session"}>
      <header>
        {nombreUsuario !== "" ? (
          <Link to={path.accountList}>
            <img src="/assets/logo_header_white.svg" alt="Logo AHBC" />
          </Link>
        ) : (
          <Link to={path.login}>
            <img src="/assets/logo_header_white.svg" alt="Logo AHBC" />
          </Link>
        )}

        {nombreUsuario !== "" ? (
          <>
            <p>Bienvenido {nombreUsuario}</p>
            <button
              value="Cerrar sesión"
              onClick={() => {
                logout();
              }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <p>Login</p>
        )}
      </header>
      {nombreUsuario && <Navbar />}
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
