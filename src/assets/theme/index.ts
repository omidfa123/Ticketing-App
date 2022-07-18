import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#232A3B',
      800: '#313A56',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Peyda',
        sansSerif: true,
        backgroundColor: 'brand.900',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

export default theme;
