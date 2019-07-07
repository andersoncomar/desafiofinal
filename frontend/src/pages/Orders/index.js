import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as OrdersActions } from '../../store/ducks/orders';

import socket from '../../services/socket';

import Header from '../../components/Header';

import {
  Container, Content, OrdersList, OrderItem, ItemsList, ItemDetail,
} from './styles';

class Orders extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();

    const connectionsWs = socket.getSubscription('orders');

    if (!connectionsWs) {
      socket.subscribe('orders').on('new:order', () => {
        loadOrdersRequest();
      });
    }
  }

  getElapsedTime = (value) => {
    const date = new Date();
    const offSet = date.getTimezoneOffset() / 60;
    date.setHours(date.getHours() - offSet);

    const formated = distanceInWords(date, value, {
      locale: pt,
      addSuffix: true,
    });

    return formated;
  };

  render() {
    const { orders } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <h1>Últimos pedidos</h1>
          <OrdersList>
            {orders.data.map(order => (
              <OrderItem key={order.id}>
                <p>
                  Pedido <strong>#{order.id}</strong> - {order.user.username}
                </p>
                <span>{this.getElapsedTime(order.created_at)}</span>
                <NumberFormat
                  value={order.total}
                  displayType="text"
                  prefix="R$ "
                  decimalSeparator=","
                  isNumericString
                  renderText={value => <strong>{value}</strong>}
                />
                <ItemsList>
                  {order.items.map(item => (
                    <ItemDetail key={item.id}>
                      <img src={item.type.image.url} alt={item.type.name} />
                      <div>
                        <p>{item.type.name}</p>
                        <span>{item.size.name}</span>
                      </div>
                    </ItemDetail>
                  ))}
                </ItemsList>
                {!!order.observation && (
                  <p className="obs">
                    <strong>Observações:</strong> {order.observation}
                  </p>
                )}
              </OrderItem>
            ))}
          </OrdersList>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
