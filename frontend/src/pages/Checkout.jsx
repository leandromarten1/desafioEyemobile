import Header from '../components/Header';
import Footer from '../components/Footer';

function Checkout() {
  return (
    <div className='checkout'>
      <Header />
      <div className='container'>
        <form>
          <div className='row'>
            <div className='col-sm-12'>
              <h3>Finalizar o pedido</h3>
              <hr />
              <h5>Dados Pessoais</h5>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  placeholder='Your name'
                  required
                />
              </div>
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
                <label htmlFor='address'>Address</label>
                <input
                  type='text'
                  className='form-control'
                  name='address'
                  placeholder='Your Address'
                  required
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='city'>City</label>
                <input
                  type='text'
                  className='form-control'
                  name='city'
                  placeholder='Your City'
                  required
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='state'>State</label>
                <input
                  type='text'
                  className='form-control'
                  name='state'
                  placeholder='Your State'
                  required
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h5>Pagamento</h5>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='credito'
                />
                <label className='form-check-label' htmlFor='credito'>
                  Credito
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='debito'
                />
                <label className='form-check-label' htmlFor='debito'>
                  Débito
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='boleto'
                />
                <label className='form-check-label' htmlFor='boleto'>
                  Boleto
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button type="submit" className="btn btn-md btn-primary w-100">Finalizar pedido</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
