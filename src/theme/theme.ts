import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export const responsiveSize = (size: number) => {
  return (WIDTH / 375) * size;
};

// export const SIZE = {
//   size_1: responsiveSize(1),
//   size_2: responsiveSize(2),
//   size_4: responsiveSize(4),
//   size_8: responsiveSize(8),
//   size_10: responsiveSize(10),
//   size_12: responsiveSize(12),
//   size_14: responsiveSize(14),
//   size_15: responsiveSize(15),
//   size_16: responsiveSize(16),
//   size_18: responsiveSize(18),
//   size_20: responsiveSize(20),
//   size_22: responsiveSize(22),
//   size_24: responsiveSize(24),
//   size_25: responsiveSize(25),
//   size_26: responsiveSize(26),
//   size_28: responsiveSize(28),
//   size_30: responsiveSize(30),
//   size_32: responsiveSize(32),
//   size_36: responsiveSize(36),
// };

export const COLORS = {
  purple: '#6231AD',
  rgbaPurple10: 'rgba(98, 49, 173, 0.1)',
  lightGrey: '#B5C0C8',
  primaryBlack: '#333333',
  secondaryBlack: '#727682',
  strokeColor: '#EEEAF3',
  whiteBG: '#FFFFFF',
  secondaryBG: 'rgba(98, 49, 173, 0.06)',
  red: '#F73232',
  green: '#48C547',
  rgbaRed: 'rgba(247, 50, 50, 0.1)',
  rgbaGreen: 'rgba(72, 197, 71, 0.1)',
  lightGreen: '#03A67F',
  darkPurple: '#452C55',
  failuerPink: '#FE4190',
  successBlue: '#2DABAD',
  lightPink: '#D2BAF5',
  lightestPink: '#B296DC',
  secondayGrey: '#F6F3FA',
  lightBlue: '#8dbdff',
  blue: '#5ba1ff',
  secondaryBlue: '#2f80ed',
  darkBlue: '#4e6afa',
};

export const FONTFAMILY = {
  AvenirNext_bold: 'AvenirNextLTPro-Bold',
  AvenirNext_It: 'AvenirNextLTPro-It',
  AvenirNext_regular: 'AvenirNextLTPro-Regular',
  Montserrat_black: 'Montserrat-Black',
  Montserrat_blackitalic: 'Montserrat-BlackItalic',
  Montserrat_bold: 'Montserrat-Bold',
  Montserrat_bolditalic: 'Montserrat-BoldItalic',
  Montserrat_extrabold: 'Montserrat-ExtraBold',
  Montserrat_extrabolditalic: 'Montserrat-ExtraBoldItalic',
  Montserrat_extralight: 'Montserrat-ExtraLight',
  Montserrat_extralightitalic: 'Montserrat-ExtraLightItalic',
  Montserrat_italic: 'Montserrat-Italic',
  Montserrat_light: 'Montserrat-Light',
  Montserrat_lightitalic: 'Montserrat-LightItalic',
  Montserrat_medium: 'Montserrat-Medium',
  Montserrat_mediumitalic: 'Montserrat-MediumItalic',
  Montserrat_regular: 'Montserrat-Regular',
  Montserrat_semibold: 'Montserrat-SemiBold',
  Montserrat_semibolditalic: 'Montserrat-SemiBoldItalic',
  Montserrat_thin: 'Montserrat-Thin',
  Montserrat_thinitalic: 'Montserrat-ThinItalic',
};
