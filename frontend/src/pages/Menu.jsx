import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import mock from '../services/mockApi';

// faz a requisição e renderiza os produtos

function Menu() {
  return (
    <div className='menu'>
      <Header />
      <div className='container'>
        <div className='d-flex flex-row justify-content-between flex-wrap h-100'>
          {mock.map((item, index) => <ProductCard info={item} key={item.name+index} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
