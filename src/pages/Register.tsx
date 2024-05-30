import React, { useState, FormEvent } from 'react';

type FormData = {

  name: string;
  surname: string;
  email: string;
  photo: string;
  password: string;
  passwordRepeat: string;
};

type FormErrors = {
  [key: string]: string | undefined;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    photo: '../assets/No_User.jpg', // Ruta a la imagen por defecto
    password: '',
    passwordRepeat: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = (): FormErrors => {
    const tempErrors: FormErrors = {};

    tempErrors.name = !formData.name
      ? 'El nombre es requerido.'
      : formData.name.length < 3
      ? 'El nombre debe tener al menos 3 caracteres.'
      : undefined;

    tempErrors.surname = !formData.surname
      ? 'El apellido es requerido.'
      : formData.surname.length < 3
      ? 'El apellido debe tener al menos 3 caracteres.'
      : undefined;

    tempErrors.email = !formData.email
      ? 'El email es requerido.'
      : !/\S+@\S+\.\S+/.test(formData.email)
      ? 'El formato del email no es válido.'
      : undefined;

    tempErrors.password = !formData.password
      ? 'La contraseña es requerida.'
      : formData.password.length < 4 || formData.password.length > 12
      ? 'La contraseña debe tener entre 4 y 12 caracteres.'
      : undefined;

    tempErrors.passwordRepeat = !formData.passwordRepeat
      ? 'Es necesario repetir la contraseña.'
      : formData.password !== formData.passwordRepeat
      ? 'Las contraseñas no coinciden.'
      : undefined;

    return tempErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setFormSubmitted(true);
    if (Object.keys(newErrors).length === 0) {
      console.log('Datos del formulario:', formData);
      // Aquí iría el código para manejar los datos del formulario, como enviarlos a un servidor.
    }
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex justify-center border-dashed items-center ml-[10%] my-10 p-3 w-5/6 h-auto">
      <div className="  mb-8 w-2/3 shadow-md rounded px-8 hover:bg-white">
        <h1 className="text-2xl font-bold mb-2 text-slate-800 hover:text-lime-500">Regístrate</h1>
          <div className="flex-grow">
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="mb-3">
                  <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                    id={key}
                    type={key === 'password' || key === 'passwordRepeat' ? 'password' : key === 'email' ? 'email' : 'text'}
                    name={key}
                    placeholder={`Introduce tu ${key}`}
                    value={value}
                    onChange={handleChange}
                  />
                  {formSubmitted && errors[key] && <p className="text-red-500 text-xs italic">{errors[key]}</p>}
                </div>
              ))}
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-slate-500 hover:bg-slate-800 text-white font-bold pb-2 px-4 rounded focus:outline-none focus:shadow-outline sm:ml-[78%] sm:py-2 sm:px-4">
                  Regístrate
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/4 ml-4">
            <div className="mb-4 mt-24">
            </div>
          </div>
        </div>
    </div>
  );
};

export default Register;
