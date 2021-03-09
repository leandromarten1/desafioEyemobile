import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

function Menu() {
  return (
    <div className='menu'>
      <Header />
      <div className='container'>
        <div className='d-flex flex-row justify-content-between flex-wrap align'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
