import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGCoin = (props: any) => (
  <Svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.5C0 2.91014 2.91014 0 6.5 0C10.0899 0 13 2.91014 13 6.5C13 10.0899 10.0899 13 6.5 13C2.91014 13 0 10.0899 0 6.5Z"
      fill="#FFD600"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.56 6.5C1.56 3.77172 3.77172 1.56 6.5 1.56C9.22827 1.56 11.44 3.77172 11.44 6.5C11.44 9.22827 9.22827 11.44 6.5 11.44C3.77172 11.44 1.56 9.22827 1.56 6.5Z"
      fill="#FFE400"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.41115 6.74671C2.41115 4.42721 4.40619 2.54689 6.86719 2.54689C8.3057 2.54689 9.58475 3.18948 10.3995 4.18655C9.63001 2.92754 8.18781 2.07996 6.53551 2.07996C4.07451 2.07996 2.07947 3.96028 2.07947 6.27978C2.07947 7.24352 2.42413 8.13122 3.00327 8.83996C2.62663 8.22372 2.41115 7.50895 2.41115 6.74671Z"
      fill="#FFD600"
    />
  </Svg>
);
export default SVGCoin;
