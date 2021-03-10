import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='navbar navbar-lg text-light bg-main p-4 d-flex mb-4'>
      <div className="container">
      <Link to='/' className="navbar-brand text-light">Café XYZ</Link>
      <div className="navbar-brand"><i className="bi-person" style={{fontSize: "40px"}}></i></div>
      </div>
    </header>
  );
}

export default Header;
