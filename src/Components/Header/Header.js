import React from 'react';

import LogoImg from '../../assets/img/logo-header.svg';
import { Container, Logo } from './styles';

function Header() {
  return (    
    <Container>
        <Logo src={LogoImg} alt="Logo" />
    </Container>    
  );
}

export default Header;
