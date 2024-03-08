import React from 'react';
import FormField from '../../models/form';


// Componente de entrada de formulario dinámico
const DynamicFormInput: React.FC<{ field: FormField }> = ({ field }) => {
  const { type, label, name, placeholder, required, validation } = field;

  // Función para manejar cambios en el valor del campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Puedes agregar aquí la lógica de validación si es necesario
  };

  // Renderizado condicional según el tipo de campo
  let result;
  switch (type) {
    case 'text':
      result =  (
        <div className="mt-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
          <input type="text" id={name} name={name} placeholder={placeholder} required={required} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
        </div>
      );
      break;
    case 'number':
      result =  (
        <div className="mt-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
          <input type="number" id={name} name={name} placeholder={placeholder} required={required} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
        </div>
      );
      break
    case 'date':
      result =  (
        <div className="mt-4">
          <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
          <input type="date" id={name} name={name} required={required} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
        </div>
      );
      break
  }

  return (
    <section className=''>
      {result}
    </section>
  )
};

export default DynamicFormInput;
