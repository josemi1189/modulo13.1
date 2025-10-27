import React from 'react';
import './style-login.css';
import { useNavigate } from 'react-router-dom';
import { path } from '@/core/routes';
import { Credencial, crearCredencialVacia } from './modelo-login';
import { iniciarSesion } from './login-api';
import { UserContext } from '@/core/context';
import { Layout } from '@/layout';

export const LoginPage : React.FC = () => {

  const [perfilUsuario, setPerfilUsuario] = React.useState<Credencial>(crearCredencialVacia());
  const { setNombreUsuario } = React.useContext(UserContext);
  const navigate = useNavigate();

  const autenticar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    iniciarSesion(perfilUsuario).then((esValido) => {
      if (esValido) {
        setNombreUsuario(perfilUsuario.usuario);
        navigate(path.accountList);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    })
  }

  return (
    <Layout>
    <div className="contenedor-login">
      <span>Inicio de Sesión</span>
      <form onSubmit={autenticar} className="contenedor-formulario">
        <label htmlFor="usuario">Usuario: </label>
        <input id="usuario" 
          placeholder="Usuario" 
          autoComplete="off" 
          onChange={(e) => setPerfilUsuario({ ...perfilUsuario, usuario: e.target.value })}          
        />
        
        <label htmlFor="password">Contraseña: </label>
        <input id="password" 
          type="password" 
          autoComplete="off" 
          placeholder="Contraseña"
          onChange={(e) => setPerfilUsuario({ ...perfilUsuario, password: e.target.value }) }
          />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    </Layout>
  )
}
