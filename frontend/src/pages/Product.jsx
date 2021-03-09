import Header from '../components/Header';
import Footer from '../components/Footer';

function Product() {
  return (
    <div>
      <Header />
      <div className='container text-center'>
        <div className='row'>
          <div className='col-sm mb-4'>
            <img src='https://picsum.photos/300/200' alt='title' />
          </div>
          <div className='col-sm'>
            <div className='d-flex flex-column'>
              <div className='d-flex justify-content-around mb-4'>
                Quantidade:
                <div className='quantity'>
                  <button className='btn badge badge-info' type='button'>
                    -
                  </button>
                  <span className='mx-2'>0</span>
                  <button className='btn badge badge-info' type='button'>
                    +
                  </button>
                </div>
              </div>

              <form>
                <div class='form-group'>
                  <label for='exampleFormControlTextarea1'>
                    Alguma observação?
                  </label>
                  <textarea
                    class='form-control'
                    id='exampleFormControlTextarea1'
                    rows='3'
                  ></textarea>
                </div>
              </form>
              <button className='btn btn-md btn-success'>Adicionar</button>
            </div>

            {/* <div className='row'>
              <form className="col">
                <span>Alguma Observação?</span>
                <textarea></textarea>
                <button>Adicionar</button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
