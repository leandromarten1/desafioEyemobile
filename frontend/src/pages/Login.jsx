import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <div className='login'>
      <Header />
      <div className='container'>
        <form>
          <div className='row'>
            <div className='col-sm-12'>
              <h4>Login</h4>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  placeholder='Your Email'
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
                  required
                />
              </div>
              <button type='submit' className='mb-3 btn btn-md btn-primary w-100'>
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
