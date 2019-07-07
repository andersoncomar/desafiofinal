import React from "react";
import PropTypes from "prop-types";

import { IconContext } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as SignInActions } from "../../store/ducks/auth/signIn";

import { Container, Content, Brand, Nav, User, OrdersButton } from "./styles";

import Logo from "../../assets/layout/logo.svg";

const Header = ({ signOut }) => (
  <Container>
    <Content>
      <Brand>
        <img src={Logo} alt="Pizzaria Don Juan" />
        <h1>Pizzaria Don Juan</h1>
      </Brand>
      <Nav>
        <User>
          <button type="button" onClick={signOut}>
            Sair do app
          </button>
        </User>
        <OrdersButton>
          <IconContext.Provider value={{ size: 18 }}>
            <FaShoppingBag />
          </IconContext.Provider>
        </OrdersButton>
      </Nav>
    </Content>
  </Container>
);

Header.propTypes = {
  signOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignInActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Header);
