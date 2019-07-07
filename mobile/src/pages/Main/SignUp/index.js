import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as SignUpActions } from '~/store/ducks/auth/signUp';

import styles from '~/pages/Main/styles';

import fundo from '~/assets/layout/fundo.jpg';
import logo from '~/assets/icons/logo.png';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { username, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(username, email, password);
  };

  render() {
    const { username, email, password } = this.state;
    const { navigation } = this.props;

    return (
      <ImageBackground source={fundo} style={styles.background}>
        <LinearGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0,0,0,1)']} style={styles.gradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.avoidView}
          >
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />
              <Image source={logo} style={styles.logo} />
              <TextInput
                value={username}
                onChangeText={text => this.setState({ username: text })}
                style={styles.input}
                placeholder="Nome completo"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
              />
              <TextInput
                value={email}
                onChangeText={text => this.setState({ email: text })}
                style={styles.input}
                placeholder="Seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={(el) => {
                  this.emailInput = el;
                }}
                onSubmitEditing={() => this.passwordInput.focus()}
              />
              <TextInput
                value={password}
                onChangeText={text => this.setState({ password: text })}
                style={styles.input}
                placeholder="Senha secreta"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                ref={(el) => {
                  this.passwordInput = el;
                }}
                onSubmitEditing={() => this.handleSubmit}
              />
              <TouchableOpacity
                onPress={this.handleSubmit}
                style={styles.button}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={styles.link}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Já tenho login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signUp.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignUpActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
