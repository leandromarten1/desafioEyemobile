function ProductCard() {
  return (
    <div className='card d-flex mb-4 mx-2' style={{ width: '150px' }}>
      <img
        className='card-img-top'
        src='https://picsum.photos/70/50'
        alt='title'
      />
      <div className='card-body p-2 text-center'>
        <h5 className='card-title'>Card title</h5>
        <p claclassNamess='card-text'>R$ 12,00</p>
      </div>
    </div>
  );
}

export default ProductCard;
