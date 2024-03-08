interface FormField {
    type: 'text' | 'number' | 'date' | 'regex'; // Tipos de entrada de formulario admitidos
    label: string; // Etiqueta del campo
    name: string; // Nombre del campo
    placeholder?: string; // Placeholder opcional
    required?: boolean; // Indica si el campo es obligatorio
    validation?: RegExp; // Expresión regular para validación
  }
  
  export default FormField;