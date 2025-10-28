import React from "react";
import "./style-login.css";
import { useNavigate } from "react-router-dom";
import { path } from "@/core/routes";
import { CredentialModel } from "./login-model";
import { isValidLogin } from "./api/login-api";
import { UserContext } from "@/core/context";
import { Layout } from "@/layout";
import { LoginForm } from "./login-form-component";
import { mapCredentialFromVmToApi } from "./login-mapper";

export const LoginPage: React.FC = () => {
  const { setNombreUsuario } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (credentials: CredentialModel) => {
    const apiCredential = mapCredentialFromVmToApi(credentials);

    isValidLogin(apiCredential).then((esValido) => {
      if (esValido) {
        setNombreUsuario(credentials.user);
        navigate(path.accountList);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  };

  return (
    <Layout>
      <div className="container-login">
        <span>Acceso</span>
        <LoginForm onLogin={handleSubmit} />
      </div>
    </Layout>
  );
};
