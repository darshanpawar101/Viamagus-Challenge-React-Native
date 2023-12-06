import React from 'react';
import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, responsiveSize} from '../theme/theme';
type ListItemProps = {
  image: ImageProps;
  title: string;
  description: string;
  special: string;
};

const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  description,
  special,
}) => {
  return (
    <View
      style={{
        marginHorizontal: responsiveSize(16),
        padding: responsiveSize(20),
        backgroundColor: COLORS.whiteBG,
        borderRadius: responsiveSize(5),
        borderColor: COLORS.strokeColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveSize(16),
      }}>
      <Image
        source={image}
        style={{height: responsiveSize(60), width: responsiveSize(60)}}
      />
      <View style={{gap: responsiveSize(8), flex: 1}}>
        <Text
          style={{
            fontFamily: FONTFAMILY.Montserrat_semibold,
            fontSize: responsiveSize(14),
            color: COLORS.primaryBlack,
            lineHeight: responsiveSize(18),
          }}>
          {title} <Text>{special}</Text>
        </Text>
        <Text
          style={{
            fontFamily: FONTFAMILY.Montserrat_medium,
            fontSize: responsiveSize(14),
            color: COLORS.secondaryBlack,
            lineHeight: responsiveSize(20),
          }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
