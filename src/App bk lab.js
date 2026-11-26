import React, { useReducer, useState } from 'react';
//import {   Alert } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
    const [formData3, setFormData3] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const [inputValue, setInputValue] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');
  const handleSubmit = event => {
    event.preventDefault();

    // if (codeusu.trim() === '') { // Check for blank value (after trimming whitespace)
    //      Alert.alert('Input is Empty', 'Please enter some text.');
    // } else {
      //setError('');
      // Proceed with form submission or other logic
      // console.log('Input is valid:', inputValue);

      setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
    // }
    
  }

  const handleChange = event => {

    setInputValue(event.target.value);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setInputValue2(event.target.value);
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  }

    const handleChange3= event => {
       setInputValue3(event.target.value);
    setFormData3({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const isButtonDisabled = !inputValue || !inputValue2 || !inputValue3 ;

  return(
    <div className="estilo">
      <h1>Registro empleado</h1>
      {submitting &&
       <div>
         Gracias por registrar la información del empleado:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Código de usuario</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Horas extras</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData3).map(([name, value]) => (
             <li key={name}><strong>Horas diaras trabajadas</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Código de usuario (5 caracteres)</p>
            <input name="codeusu" value={inputValue} onChange={handleChange} minLength={5} placeholder="Enter at least 5 characters" />
          </label>
           

       <label>
        <p style={{ fontWeight: 'bold', color: 'blue' } }  >Horas extras (0-4)</p>
        <input
          type="number"
          min="0" // Minimum allowed value
          max="4" // Maximum allowed value
         value={inputValue2}
          onChange={handleChange2}
        />
       </label>

        <label>
        <p style={{ fontWeight: 'bold', color: 'blue'  } } >Horas diarias trabajadas(0-8)</p>
        <input
          type="number"
          min="0" // Minimum allowed value
          max="8" // Maximum allowed value 
          onChange={handleChange3}
        />
       </label>
        </fieldset>
        <button disabled={isButtonDisabled}
        style={{ fontWeight: 'bold', color: 'blue' } } type="submit">Enviar</button>
      </form>
    </div>
  )
}



export default App;