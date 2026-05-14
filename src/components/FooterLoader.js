import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../theme/colors';

const FooterLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
};

export default FooterLoader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});