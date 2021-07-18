import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ changeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="45" onPress={() => changeTime(45)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="60" onPress={() => changeTime(60)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="25" onPress={() => changeTime(25)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
