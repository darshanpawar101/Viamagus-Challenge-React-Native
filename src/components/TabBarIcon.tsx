import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, responsiveSize} from '../theme/theme';
import CustomIcon from './CustomIcon';

type TabBarIconProps = {
  focused: boolean;
  title: string;
  iconName: string;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({focused, title, iconName}) => {
  return (
    <View style={styles.Container}>
      <CustomIcon
        name={iconName}
        size={responsiveSize(24)}
        color={focused ? COLORS.purple : COLORS.lightGrey}
      />
      <Text
        style={[
          styles.Title,
          focused
            ? {color: COLORS.purple, fontFamily: FONTFAMILY.Montserrat_semibold}
            : {
                color: COLORS.lightGrey,
                fontFamily: FONTFAMILY.Montserrat_medium,
              },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveSize(4),
    borderStartColor: 'black',
  },
  Title: {
    fontSize: responsiveSize(11),
  },
});

export default TabBarIcon;
