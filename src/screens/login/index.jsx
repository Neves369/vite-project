import { useState } from "react"


const Login = ()=>{

    const [erro, setErro] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [visible, setVisible] = useState(false);


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
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email} 
                    required
                    onChange={(e)=>{setEmail(e.target.value)}}

                />
                <input 
                    type={visible? "text":"password"} 
                    placeholder="Senha"
                    value={senha}
                    required
                    onChange={(e)=>{setSenha(e.target.value)}}  
                />
                <button type="button" onClick={()=>{setVisible(!visible)}}>{visible? "Esconder": "Mostrar"}</button>

                {erro && <p style={{color:"red"}}>{erro}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    )

} 

export default Login