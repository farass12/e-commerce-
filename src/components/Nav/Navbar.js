import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../images/logo-ortopedic.png';
import LogoWrapper from '../LogoWrapper/LogoWrapper';
import CartButton from './CartButton';
import Burger from './Burger';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 100%;
  padding: 20px 40px; 
  display: flex;
  justify-content: space-between; /* kiri & kanan terpisah */
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* jarak antara Cart dan Burger */
`;

const Navbar = ({ open, handleBurgerClick }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Left>
          <a href="/">
            <LogoWrapper src={Logo} alt="suntime.com" />
          </a>
        </Left>
        <Right>
          <CartButton href="#" className="snipcart-checkout">
            Cart
          </CartButton>
          <Burger open={open} handleBurgerClick={handleBurgerClick} />
        </Right>
      </InnerWrapper>
    </Wrapper>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleBurgerClick: PropTypes.func.isRequired,
};

export default Navbar;
