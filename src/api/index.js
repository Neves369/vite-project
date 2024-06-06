import axios from "axios";

/**
 * Cria uma instância do cliente Axios com a base URL definida
 * para fazer requisições HTTP para a API
 */
const api = axios.create({
  /**
   * URL base para as requisições HTTP
   */
  baseURL: `https://665f845a5425580055b0004d.mockapi.io/`
});

/**
 * Exporta a instância do cliente Axios como padrão
 */
export default api;