import React, { Component } from 'react';

import './Header.css'

class Header extends Component {
  render() {
    return <div className="header">
      <div className="logo">facebook</div>
      <div className="perfil">Meu perfil</div>
    </div>
  }
}

export default Header;