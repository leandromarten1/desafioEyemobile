import React, { useReducer } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const [login, setLogin] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { email: '', password: '' },
  );

  const { email, password } = login;

  const handleLogin = ({ target: { name, value } }) =>
    setLogin({ [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <div className='login'>
      <Header />
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-sm-12'>
              <h4>Login</h4>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Your Email'
                  value={email}
                  onChange={handleLogin}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Your Password'
                  value={password}
                  onChange={handleLogin}
                  required
                />
              </div>
              <button
                type='submit'
                className='mb-3 btn btn-md btn-primary w-100'
              >
                Entrar
              </button>
              <button type='submit' className='btn btn-md btn-secondary w-100'>
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
