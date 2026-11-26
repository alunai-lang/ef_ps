import React, { useReducer, useState } from 'react'; 
 
//import {   Alert } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

  const distribuidores = [
    { id: 'Fabricantes', displayName: 'Fabricantes' },
    { id: 'Mayoristas', displayName: 'Mayoristas' },
    { id: 'Distribuidores', displayName: 'Distribuidores' },
  ];
function App() {

  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;



  const [formData1, setFormData1] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
    const [formData3, setFormData3] = useReducer(formReducer, {});
    const [formData4, setFormData4] = useReducer(formReducer, {});
        const [formData5, setFormData5] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');
const [inputValue4, setInputValue4] = useState('');

 const [selectedFruit, setSelectedFruit] = useState('apple'); // Initial value

   const handleEmailChange = (event) => {
     setInputValue4(event.target.value);
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(emailRegex.test(newEmail));
     setFormData4({
      name: event.target.name,
      value: event.target.value,
    });
  };

   const handleChange = (event) => {
    setSelectedFruit(event.target.value);
        setFormData5({
      name: event.target.name,
      value: event.target.value,
    });
  };

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

  const handleChange1 = event => {

    setInputValue1(event.target.value);
    setFormData1({
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

     /*    const handleChange4= event => {
       setInputValue4(event.target.value);
  setFormData4({
      name: event.target.name,
      value: event.target.value,
    }); 
  }*/

  const isButtonDisabled = !inputValue1 || !inputValue2 || !inputValue3 || !inputValue4 ;

  return(
    <div className="estilo">
      <h1>Registro de Proveedores</h1>
      {submitting &&
       <div>
         Gracias por registrar la información del proveedor:
         <ul>
           {Object.entries(formData1).map(([name, value]) => (
             <li key={name}><strong>Código</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Nombre de proveedor</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData3).map(([name, value]) => (
             <li key={name}><strong>RUC</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData4).map(([name, value]) => (
             <li key={name}><strong>Email</strong>: {value.toString()}</li>
           ))}
         </ul>
          <ul>
           {Object.entries(formData5).map(([name, value]) => (
             <li key={name}><strong>Tipo de proveedor</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Código (mínimo 5 caracteres)</p>
            <input name="code" value={inputValue1} onChange={handleChange1} minLength={5} placeholder="Ingrese código" /> {/* placeholder="Ingrese como mínimo 5 caracteres"  */}
          </label>
           
           <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Nombre de proveedor</p>
            <input name="nom" value={inputValue2} onChange={handleChange2} minLength={2} placeholder="Ingrese nombre" /> {/* placeholder="Ingrese como mínimo 2 caracteres" */}
          </label>

          <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } }  >RUC</p>
            <input
              type="number"
              min="10000000000" // Minimum allowed value
              max="99999999999" // Maximum allowed value
            value={inputValue3}
              onChange={handleChange3}
              placeholder="Ingrese RUC"
            />
          </label>
             <label>
            <p style={{ fontWeight: 'bold', color: 'blue' } } >Email</p>
         {/*    <input type="email" value={inputValue4}  onChange={handleChange4} placeholder="Ingrese email" /> */}
              <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Ingrese email"
      />
      {!isValid && <p style={{ color: 'red' }}>Por favor ingrese un email válido</p>}
         {/*    <input name="nom" value={inputValue4} onChange={handleChange4} minLength={2}  /> */} {/* placeholder="Ingrese como mínimo 2 caracteres" */}
          </label>

            {/* <label htmlFor="fruit-select">Choose a fruit:</label> */}
             <p style={{ fontWeight: 'bold', color: 'blue' } } >Tipo de proveedor</p>
      <select id="fruit-select" value={selectedFruit} onChange={handleChange}>
        {distribuidores.map((fruit) => (
          <option key={fruit.id} value={fruit.id}>
            {fruit.displayName}
          </option>
        ))}
      </select>
      {/* <p>You selected: {selectedFruit}</p> */}

       {/* <label>
        <p style={{ fontWeight: 'bold', color: 'blue' } }  >Email</p>
        <input
          type="email" 
         value={inputValue5}
          onChange={handleChange5}
        />
       </label> */}
 
        </fieldset>
        <button disabled={isButtonDisabled}
        style={{ fontWeight: 'bold', color: 'blue' } } type="submit">Enviar</button>
      </form>
    </div>
  )
}



export default App;