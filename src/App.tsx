import React, { useState } from 'react';
import FormField from './models/form';
import DynamicFormInput from './components/dynamic-form-input/dynamic-form-input';
import profile from './assets/profile.jpg';

/**
 * Props for `Icon` component
 */
interface IconProps {
  src: string;
  alt: string;
  onClick: () => void;
}

// Objeto que contiene todos los tipos de campos de formulario posibles
const formFields: FormField[] = [
  {
    type: 'text',
    label: 'Nombre',
    name: 'name',
    placeholder: 'Ingrese su nombre',
    required: true
  },
  {
    type: 'number',
    label: 'Edad',
    name: 'age',
    placeholder: 'Ingrese su edad',
    required: true
  },
  {
    type: 'date',
    label: 'Fecha de nacimiento',
    name: 'dob',
    required: true
  },
  {
    type: 'text',
    label: 'Correo electrónico',
    name: 'email',
    placeholder: 'Ingrese su correo electrónico',
    required: true,
    validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  // Puedes agregar más tipos de campos según tus necesidades
];

/**
 * Icon component displaying an image that can be clicked
 * @param src Image source
 * @param alt Alternative text for image
 * @param onClick Click handler
 * @returns A clickable image
 */
const Icon: React.FC<IconProps> = ({ src, alt, onClick }) => (
  <img loading="lazy" src={profile} alt={alt} className="shrink-0 my-auto w-4 aspect-square cursor-pointer" onClick={onClick} />
);

/**
 * Props for `ActionIcon` component
 */
interface ActionIconProps extends IconProps { }

/**
 * ActionIcon component for interactive icons within a button
 * @param src Image source
 * @param alt Alternative text for image
 * @param onClick Click handler for the button
 * @returns A button with an icon
 */
const ActionIcon: React.FC<ActionIconProps> = ({ src, alt, onClick }) => (
  <button className="flex justify-center items-center px-2.5 w-10 h-10 rounded-xl bg-slate-200" onClick={onClick}>
    <img loading="lazy" src={profile} alt={alt} className="w-5 aspect-square" />
  </button>
);

/**
 * NavBar component containing navigation and action items
 * @returns Navigation bar
 */
const NavBar: React.FC = () => {
  // Example click handler
  const handleClick = () => alert('Clicked!');

  return (
    <nav className="flex gap-0 justify-between px-10 py-3.5 border-b border-gray-200 border-solid max-md-wrap max-md:px-5">
      <div className="flex gap-4 my-auto text-lg font-bold tracking-tight text-neutral-900">
        <div>Code Lab</div>
      </div>
      <div className="flex flex-auto gap-5 justify-between pl-20 max-md:flex-wrap">
        <div className="flex gap-5 justify-between py-2.5 text-sm font-medium leading-5 whitespace-nowrap text-neutral-900">
          <button onClick={handleClick}>Explore</button>
          <button onClick={handleClick}>Create</button>
          <button onClick={handleClick}>Learn</button>
          <button onClick={handleClick}>Community</button>
        </div>
        <Icon src={profile} alt="User profile" onClick={handleClick} />
      </div>
    </nav>
  );
};


/**
 * RepositoryUpload form component for uploading repositories
 * @returns Form for repository details input and submission
 */

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextInput = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, formFields.length - 1));
  };

  const goToPreviousInput = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (<main>
    <NavBar></NavBar>
    <div className="">
      <section>
        <DynamicFormInput field={formFields[currentIndex]} />
        <div className="flex justify-around">
        <button
            className="top-1/2 left-4 transform -translate-y-1/2 mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg max-md:w-full hover:bg-blue-700 focus:outline-none"
            onClick={goToPreviousInput}
            disabled={currentIndex === 0}
          >
            Anterior
          </button>
          <button
            className="transform -translate-y-1/2 mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg max-md:w-full hover:bg-blue-700 focus:outline-none"
            onClick={goToNextInput}
            disabled={currentIndex === formFields.length - 1}
          >
            Siguiente
          </button>
        </div>
      </section>

    </div>
  </main>
  );

};


export default App;
