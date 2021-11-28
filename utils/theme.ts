import { createTheme, PaletteOptions, responsiveFontSizes } from '@mui/material'

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    light: '#474747',
    main: '#272727',
    dark: '#002884',
    contrastText: '#fff',
  },
}

function createBaseTheme() {
  return createTheme({
    palette,
    typography: {
      fontFamily: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      h3: {
        fontFamily: 'Roboto',
        fontSize: 44,
      },
    },
    spacing: 8,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#046cdb',
            color: '#fff',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {},
        },
      },
    },
  })
}

const theme = responsiveFontSizes(createBaseTheme())

export default theme
