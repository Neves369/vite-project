/* eslint-disable react/prop-types */

import Login from "../screens/login"; 
import Dashboard from "../screens/dashboard";
import { Switch, Route, Redirect } from "react-router-dom"; 

/**
 * O controlador de rotas principal que define as rotas da aplicação
 */
const RoutesController = () => {
  
  /**
   * Função que cria uma rota privada que verifica se o usuário está autenticado
   * antes de redirecionar para a rota especificada
   * @param {string} path - Caminho da rota
   * @param {React.Component} item - Componente a ser renderizado na rota
   */
  const PrivateRoute = ({path, item}) => {
    const isAuthenticated = true; // Flag de autenticação do usuário
      
    return (
      /**
       * Se o usuário estiver autenticado, renderiza a rota especificada
       * Caso contrário, redireciona para a página de login
       */
      isAuthenticated? 
        <Route path={path} component={item} />
      : 
        <Redirect to="/" />
    );
  };

  return (
    /**
     * Switch que gerencia as rotas da aplicação
     */
    <Switch>
      {/* Rota comum */}
      <Route path="/" exact component={Login} />
      {/* Rota privada */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
     
    </Switch>
  );
};

export default RoutesController;