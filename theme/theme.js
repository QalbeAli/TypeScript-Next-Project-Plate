import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      blue: '#3298dc',

      alternate: {
        main: '#1a2138',
        dark: '#152951',
      },
      cardShadow: 'rgba(0, 0, 0, .11)',
      common: {
        black: '#000',
        white: '#fff',
        yellow: '#FFBB54',
        green: '#00ADA3',
        purple: '#374C98',
        blue: '#3298dc',
        success: '#d1fae5',
      },
      //   mode: 'dark',
      success: {
        main: '#d1fae5',
      },
      yellow: {
        main: '#fdfaea',
      },
      primary: {
        main: '#1877f3',
        light: '#2670d1',
        dark: '#0965de',
        contrastText: '#FFF',
      },
      secondary: {
        light: '#43ccc9',
        main: '#09ADA9',
        dark: '#0db5b1',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#000',
        secondary: '#000',
      },
      // divider: '#152951',
      background: {
        paper: '#171717',
        // paper: 'linear-gradient(rgb(16, 137, 255), rgb(0, 21, 36))',
        default: '#264469',
        level2: '#333',
        level1: '#2D3748',
      },
    },
    layout: {
      contentWidth: 1236,
    },
    typography: {
        // eslint-disable-next-line quotes
        fontFamily: ['Roboto', 'Arial', 'sans-serif'],
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        lineHeight: 1.5,
        h1: {
          fontSize: '1.2rem'
        },
     
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {
      MuiTouchRipple: false,
      MuiTextField: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiListItemButton: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple!
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 33,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: '14px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          label: {
            fontWeight: 600,
          },

          containedSecondary: {},
        },
      },
    },
    // shape: {
    //   borderRadius: 15,
    // },
  }),
);

export default theme;