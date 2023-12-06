import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, responsiveSize} from '../theme/theme';

const BlankScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: FONTFAMILY.AvenirNext_bold,
          fontSize: responsiveSize(14),
          color: COLORS.primaryBlack,
        }}>
        Blank Screen
      </Text>
    </View>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({});
