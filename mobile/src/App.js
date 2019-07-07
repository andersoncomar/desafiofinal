import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import createNavigator from '~/routes';
import navigation from '~/services/navigation';

class App extends Component {
  static propTypes = {
    signIn: PropTypes.shape({
      auth: PropTypes.bool,
    }).isRequired,
  };

  registerService = (ref) => {
    navigation.setNavigator(ref);
  };

  render() {
    const { signIn } = this.props;

    // if (!auth.authChecked) return null;

    const Routes = createNavigator(signIn.auth);

    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  signIn: state.signIn,
});

export default connect(mapStateToProps)(App);
