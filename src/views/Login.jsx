import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSpoti from '../assets/static/logo.png';
import '../assets/styles/components/Login.scss';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux';


const Login = () => {
  const [form, setForm] = useState({
    email: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(form, '/'));
  }

  console.log(form);
  return (
    <section className='Container'>
      <section className='Container-login'>
        <div className='logo'>
          <img src={logoSpoti} alt='Logo' />
          <h2>Empieza a escuchar musica con nosotros</h2>
        </div>

        <div className='Container-login__complement'>
          <button type='button' className='btn-facebook'>Inicia Sesión con Facebook</button>
          <button type='button' className='btn-google'>Inicia Sesión con Google</button>
        </div>

        <span className='division'>──────────── Ó ────────────</span>

        <form className='Container-login__form' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Correo electronico'
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Contraseña'
            onChange={handleChange}
          />
          <div className='options firstContainer__form'>
            <div className='checkbox'>
              <input
                type='checkbox'
                name='remembermePassword'
                id='rememberme-password'
              />
              <p>Recuerdame</p>
            </div>
            <button type='submit'>Iniciar Sesión</button>
          </div>
        </form>

        <div className='Container-login-signUp'>
          <Link to='/login' className='firstContainer__complement-link'>
            ¿Se te ha olvidado la contraseña?
          </Link>
          <h2 className='firstContainer__complement'>¿No tienes cuenta?</h2>
          <Link to='/register' className='subscribe'>
            Suscribete a Spotify
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Login;
