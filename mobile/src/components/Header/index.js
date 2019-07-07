import React from 'react';
import {
  View, Image, Text, StatusBar,
} from 'react-native';

import styles from './styles';

import headerBackground from '~/assets/layout/header-background.png';

export default function Header(props) {
  const {
    titleStyles, title, leftContent, rightContent,
  } = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={headerBackground} style={styles.headerBackground} resizeMode="stretch" />
      <View style={styles.headerBar}>
        <View style={[styles.headerTitle, titleStyles]}>
          <Text style={styles.headerTitleText}>{title}</Text>
        </View>
        <View>{leftContent}</View>
        <View>{rightContent}</View>
      </View>
    </View>
  );
}
