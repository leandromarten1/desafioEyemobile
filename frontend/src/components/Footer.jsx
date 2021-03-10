import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeAllCart } from '../redux/actions';

function Footer() {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.cart);

  const totalItens = Object.values(carrinho).reduce(
    (acc, crr) => crr.quantity + acc,
    0,
  );

  const totalPrice = Object.values(carrinho)
    .reduce((acc, curr) => curr.quantity * curr.price + acc, 0)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const removeCartItems = () => {
    dispatch(removeAllCart());
  };

  return (
    <footer className='fixed-bottom navbar navbar-lg navbar-light bg-info p-4 d-flex'>
      <div className='container'>
        <div className='d-flex flex-column'>
          <h6 className='text-secondary'>{totalItens} itens</h6>
          <h5>{totalPrice}</h5>
        </div>
        <Link to='/checkout' className='btn btn-secondary'>Finalizar pedido</Link>
        <i
          className='bi-trash'
          onClick={() => removeCartItems()}
          style={{ fontSize: '40px' }}
        ></i>
      </div>
    </footer>
  );
}

export default Footer;
