import RoutesController from "./routes" 
import { BrowserRouter } from "react-router-dom"; 

/**
 * O componente App principal que envolve o 
 * componente RoutesController com BrowserRouter
 * para habilitar o roteamento na aplicação
 */
function App() {
  /**
   * Retorna o elemento JSX que representa o componente App
   */
  return (
    /**
     * BrowserRouter é o componente de nível superior que faz o roteamento funcionar
     * fornecendo o contexto para as rotas
     */
    <BrowserRouter>
      {/*Componente RoutesController que define as rotas e seus componentes correspondentes */}
      <RoutesController />
    </BrowserRouter>
  )
}

export default App // Exportando o componente App como exportação padrão