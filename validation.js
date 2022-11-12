/* import * as Yup from 'yup';
export default Yup.object().shape({
    name: Yup.string()
      
      .max(50, 'Máximo 50 caracteres')
      .required('Obrigatório'),
    apelido: Yup.string()
     
      .max(20, 'Máximo 20 caracteres'),
    email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail obrigatório'),
    cpf: Yup.string()
      .max(11, 'Até 11 caracteres')
      .required('Obrigatório'),
    password: Yup.string()
      .min(4, 'Mínimo 4 caracteres')
      .required('Obrigatório'),
    passwordConfirm: Yup.string()
    .min(4 , 'Mínimo 4 caracteres')
    .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
    .required('Obrigatório')
  });
  
 */