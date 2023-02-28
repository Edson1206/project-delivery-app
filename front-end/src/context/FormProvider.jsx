import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

const formContext = createContext();

function FormProvider({ children }) {
  const [inputsValue, setInputsValue] = useState({
    name: { value: '', isValid: false },
    email: { value: '', isValid: false },
    pass: { value: '', isValid: false },
  });

  const state = useMemo(() => ({
    inputsValue,
    setInputsValue,
  }), [inputsValue]);

  return (
    <formContext.Provider value={ state }>
      {children}
    </formContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default FormProvider;
export { formContext };
