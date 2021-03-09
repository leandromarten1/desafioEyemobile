function Footer(props) {
    return (
      <footer className='fixed-bottom navbar navbar-lg navbar-light bg-info p-4 d-flex'>
        <div className="container">
        <div class="navbar-brand">Total</div>
        <button class="btn btn-secondary">Finalizar pedido</button>
        <i className="bi-trash" style={{fontSize: "40px"}}></i>
        </div>
      </footer>
    );
  }
  
  export default Footer;