import PropTypes from 'prop-types';

const CustomInput = (props) => {

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      onChange={(e)=>{props.action(e.target.value)}}
    />
  );
};

// Este trecho não é necessário, 
// mas valida o tipo das propriedades recebidas
CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired
};
// -------------------------------------------------------

export default CustomInput;
