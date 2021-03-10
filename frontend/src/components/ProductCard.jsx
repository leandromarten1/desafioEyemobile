import React from 'react';
import { Link } from 'react-router-dom';

const convertCurrency = (price) => {
  return price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

function ProductCard(props) {
  const { id, image, name, price } = props.info;
  return (
    <Link to={`/${id}`}>
      <div className='card d-flex mb-4 mx-2' style={{ width: '150px' }}>
        <img
          className='card-img-top'
          src={image}
          width={130}
          height={140}
          alt={name}
        />
        <div className='card-body p-2 text-center'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{convertCurrency(price)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
