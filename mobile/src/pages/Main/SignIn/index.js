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
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as SignInActions } from '~/store/ducks/auth/signIn';

import styles from '~/pages/Main/styles';
import fundo from '~/assets/layout/fundo.jpg';
import logo from '~/assets/icons/logo.png';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }.isRequired;

  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { loading, navigation } = this.props;

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
                value={email}
                onChangeText={text => this.setState({ email: text })}
                style={styles.input}
                placeholder="Seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
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
                onSubmitEditing={this.handleSubmit}
              />
              <TouchableOpacity
                onPress={this.handleSubmit}
                style={styles.button}
                activeOpacity={0.8}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#FFFF" />
                ) : (
                  <Text style={styles.buttonText}>Entrar</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={styles.link}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Criar conta gratuita</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignInActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
