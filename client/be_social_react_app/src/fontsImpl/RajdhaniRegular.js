import RajdhaniRegularWoff from './../fonts/Rajdhani-Regular.woff';
import RajdhaniRegularWoff2 from './../fonts/Rajdhani-Regular.woff2';

const RajdhaniRegular = {
  fontFamily: 'RajdhaniRegular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Rajdhani-Regular'),
    url(${RajdhaniRegularWoff}) format('woff'),
    url(${RajdhaniRegularWoff2}) format('woff2'),
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default RajdhaniRegular;