import React from "react";
import { CredentialModel, createEmptyCredential } from "./login-model";

interface Props {
  onLogin: (credentials: CredentialModel) => void;
}

export const LoginForm: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [credentials, setCredentials] = React.useState<CredentialModel>(
    createEmptyCredential()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <label htmlFor="user">Usuario: </label>
      <input
        id="user"
        name="user"
        placeholder="Usuario"
        autoComplete="off"
        onChange={handleFieldChange}
      />

      <label htmlFor="password">Contraseña: </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="off"
        placeholder="Contraseña"
        onChange={handleFieldChange}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};
