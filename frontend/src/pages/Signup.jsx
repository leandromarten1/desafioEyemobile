import React, { useReducer } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { signUp } from '../services/api';

function Signup() {
  const history = useHistory();
  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      nome: '',
      email: '',
      password: '',
    },
  );

  const handleForm = ({ target: { name, value } }) => {
    setForm({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signUp(form.nome, form.email, form.password);
      history.push('/login')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='checkout'>
        <Header />
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-sm-12'>
                <h3>Cadastro</h3>
                <hr />
                <div className='form-group'>
                  <label htmlFor='nome'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    name='nome'
                    placeholder='Your name'
                    onChange={handleForm}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    placeholder='Your Email'
                    onChange={handleForm}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Senha</label>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    placeholder='Your Password'
                    onChange={handleForm}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-md-12'>
                <button type='submit' className='btn btn-md btn-primary w-100'>
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
