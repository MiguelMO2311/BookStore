import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Clock from 'react-clock';
import Calendar from 'react-calendar';

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
};

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const LogIn: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=9bb2bc0f636a99daa03a208326be47e5`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el clima:', error);
      });
  }, []);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let formIsValid: boolean = true;

    if (!formData.email) {
      formIsValid = false;
      tempErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      tempErrors.email = 'Debe ser un email válido.';
    }

    if (!formData.password) {
      formIsValid = false;
      tempErrors.password = 'La contraseña es requerida.';
    } else if (formData.password.length < 4 || formData.password.length > 12) {
      formIsValid = false;
      tempErrors.password = 'La contraseña debe tener entre 4 y 12 caracteres.';
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:3000/login', formData)
        .then(response => {
          setUser(response.data.user);
          localStorage.setItem('userInfo', JSON.stringify(response.data.user));
          toast.success('Usuario Logueado con éxito!', { position: 'top-center', autoClose: 2000 });
          setTimeout(() => {
            navigate('/BooksPage');
          }, 3000);
        })
        .catch(error => {
          console.error('Error al iniciar sesión:', error);
          toast.error(`Error al iniciar sesión: ${error.response.data.message}`, { position: 'top-center', autoClose: 2000 });
        });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="bg-cover bg-center h-screen transition-all duration-1000" style={{ backgroundImage: "url('/imgs/img_fondo_login.jpg')", backgroundSize: '75%', maxHeight: "550px" }}>
      <div className="flex justify-center items-center pt-24 border-dashed">
        {/* Bloque Izquierdo (Calendario) */}
        <div className="w-1/3 mx-10 bg-green-800 rounded-xl bg-opacity-50 text-black hover:bg-white font-extrabold absolute top-1">
          <Calendar />
        </div>
  
        {/* Bloque Central (Formulario de Inicio de Sesión) */}
        <div className="w-1/3 hover:bg-green-800 hover:bg-opacity-50 p-5 m-5 rounded-xl">
          <h1 className="text-2xl font-bold mb-4 text-slate-800 hover:text-yellow-500">Logueate</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-100 hover:bg-white"
                id="email"
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="current-password"
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                Contraseña:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-100 hover:bg-white"
                id="password"
                type="password"
                name="password"
                placeholder="Tu contraseña"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-yellow-700 hover:bg-yellow-950 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline ml-[40%]" type="submit">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
  
        {/* Bloque Derecho (Datos Meteorológicos) */}
        <div className="w-28 items-center self-center rounded-xl absolute right-[360px] top-44 px-5  font-extrabold bg-green-800 bg-opacity-15 hover:bg-white">
          {weatherData && (
            <div>
              <h2>{weatherData.name}</h2>
              <h3>{Math.round(weatherData.main.temp - 273.15)}°C</h3>
              <p>{weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default LogIn;
