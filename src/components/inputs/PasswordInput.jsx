import { useState } from "react";
import PropsTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-div">
        <input
            style={{flex: 6}}
            type={visible? "text" : "password"}
            placeholder={props.placeholder}
            value={props.value}
            required={props.required}
            onChange={(e) => {
                props.action(e.target.value);
            }}
        />
        <span
            className="button-show-password"
            onClick={()=>{setVisible(!visible)}}
        >
            {visible? <FaEye /> : <FaEyeSlash />}
            

        </span>
   </div>
  );
};

// Este trecho não é necessário, 
// mas valida o tipo das propriedades recebidas
PasswordInput.propTypes = {
    value: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    required: PropsTypes.bool,
    action: PropsTypes.func.isRequired
}
// ----------------------------------------------


export default PasswordInput;
