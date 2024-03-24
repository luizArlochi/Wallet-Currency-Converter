const validateFields = (value, description) => {
    if (!value.trim() || !description.trim()) {
      return 'Por favor, preencha todos os campos.';
    }
    return '';
  };
  
  export default validateFields;