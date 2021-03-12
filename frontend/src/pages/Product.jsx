import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addToCart, updateQuantity, removeFromCart } from '../redux/actions';
import { getProductById } from '../services/api';
import { getToken } from '../utils/helpers';

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const carrinho = useSelector((state) => state.cart);
  const [observacao, setObservacao] = useState('');
  const [produto, setProduto] = useState({});
  const [quantity, setQuantity] = useState(1);

  const token = getToken();

  useEffect(() => {
    getProductById(token, id).then(({ data }) => setProduto(data));
  }, [id, token]);

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
    if (carrinho[item.nome]) {
      // const payload = { ...item, quantity: item.quantity + quantity };
      dispatch(updateQuantity(item));
    } else {
      dispatch(addToCart(item));
    }
  };

  const removeItem = (item) => {
      dispatch(removeFromCart(item));
  };

  return (
    <div className="product">
      {console.log('Carrinho do Redux: ', carrinho)}
      <Header />
      <div className='container text-center'>
        <div className='row'>
          <div className='col-sm mb-4'>
            <img
              src={produto.imagem}
              width='300px'
              height='200px'
              alt={produto.nome}
            />
          </div>
          <div className='col-sm'>
            <div className='d-flex flex-column'>
              <h5 className='mb-4'>{produto.nome}</h5>
              <div className='d-flex justify-content-around mb-2'>
                Quantidade:
                <div className='quantity'>
                  <button
                    className='btn badge badge-danger'
                    type='button'
                    onClick={() => handleQuantity(-1)}
                  >
                    -
                  </button>
                  <span className='mx-2'>{quantity}</span>
                  <button
                    className='btn badge badge-success'
                    type='button'
                    onClick={() => handleQuantity(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='d-flex justify-content-around mb-4'>
                Quantidade no carrinho:
                <div className='quantity'>
                  <strong>{carrinho[produto.nome] ? carrinho[produto.nome].quantity : 0 }</strong>
                </div>
                <button className='btn badge badge-success' onClick={() => removeItem(produto)}>Remover do carrinho</button>
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
              <Link to='/cardapio' className='btn btn-md btn-secondary'>
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
