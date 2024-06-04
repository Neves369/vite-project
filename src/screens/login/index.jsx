import { useState } from "react";
import CustomInput from "../../components/inputs/CustomInput";
import PasswordInput from "../../components/inputs/PasswordInput";

const Login = () => {
    const [erro, setErro] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    


    const handleSubmit = (e) =>{
        e.preventDefault();        
        if(email === "admin@admin.com" && senha === "admin"){
            alert("Login realizado com sucesso");
        
        }
        else{
            setErro("Email ou senha inválidos");
            alert("Email ou senha inválidos");
        }
    }


    return(
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
    )

} 

export default Login