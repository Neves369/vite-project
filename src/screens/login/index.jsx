import api from "../../api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomInput from "../../components/inputs/CustomInput";
import PasswordInput from "../../components/inputs/PasswordInput";

/**
 * Componente de login que lida com a autenticação do usuário
 */
const Login = () => {
  const history = useHistory();
  const [erro, setErro] = useState(""); // Estado para armazenar mensagens de erro
  const [email, setEmail] = useState(""); // Estado para armazenar o email do usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha do usuário

  /**
   * Função que lida com o envio do formulário de login
   * @param {Event} e - Evento de envio do formulário
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const response = await api.get(`users?email=${email}&senha=${senha}`); // Requisição GET para a API com os dados de login

    if (response.status === 200) {

      history.push("/dashboard"); // Redireciona para a página de painel de controle
    } else {
      setErro("Email ou senha inválidos"); // Atualiza o estado de erro
      alert("Email ou senha inválidos"); // Exibe mensagem de erro
    }
  };

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <CustomInput  
          type="email" 
          placeholder="Email"
          value={email} 
          required={true}
          action={setEmail}
        />
        
        <PasswordInput 
          placeholder={"Senha"} 
          value={senha}
          required={true}
          action={setSenha}
        />
        {erro && <p style={{color:"red"}}>{erro}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;