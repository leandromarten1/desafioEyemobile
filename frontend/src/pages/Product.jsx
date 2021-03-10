import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  addToCart,
  removeFromCart,
} from '../redux/actions';
import mock from '../services/mockApi';

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [observacao, setObservacao] = useState('');
  const [produto, setProduto] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const item = mock.filter((item) => item.id === parseInt(id));
    setProduto({ ...item[0] });
  }, []);

  const handleQuantity = (number) => {
    if (quantity > 1 && number < 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else if (quantity >= 1 && number > 0) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      return quantity;
    }
    return;
  };

  const addItem = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <Header />
      <div className='container text-center'>
        <div className='row'>
          <div className='col-sm mb-4'>
            <img
              src={produto.image}
              width='300px'
              height='200px'
              alt={produto.name}
            />
          </div>
          <div className='col-sm'>
            <div className='d-flex flex-column'>
              <h5 className='mb-4'>{produto.name}</h5>
              <div className='d-flex justify-content-around mb-4'>
                Quantidade:
                <div className='quantity'>
                  <button
                    className='btn badge badge-info'
                    type='button'
                    onClick={() => handleQuantity(-1)}
                  >
                    -
                  </button>
                  <span className='mx-2'>{quantity}</span>
                  <button
                    className='btn badge badge-info'
                    type='button'
                    onClick={() => handleQuantity(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <form>
                <div className='form-group'>
                  <label htmlFor='form'>Alguma observação?</label>
                  <textarea
                    className='form-control'
                    id='form'
                    rows='3'
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <button
                className='btn btn-md btn-success mb-2'
                onClick={() => addItem({ ...produto, quantity, observacao })}
              >
                Adicionar
              </button>
              <Link to='/' className='btn btn-md btn-secondary'>
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
