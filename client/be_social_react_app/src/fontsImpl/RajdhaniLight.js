import RajdhaniLightWoff from './../fonts/Rajdhani-Light.woff';
import RajdhaniLightWoff2 from './../fonts/Rajdhani-Light.woff2';

const RajdhaniLight = {
  fontFamily: 'RajdhaniBold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    local('Rajdhani-Bold'),
    url(${RajdhaniLightWoff}) format('woff'),
    url(${RajdhaniLightWoff2}) format('woff2'),
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default RajdhaniLight;