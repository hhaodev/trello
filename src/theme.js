import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        text_navbar: '#ffffff',
        text_color: '#000000',
        app_bar: '#171717',
        bgr_board: '#d1d8e0',
        bgr_column: '#ebecf0',
        bgr_card: '#ffffff',
        bgr_scroll_card: '#bdc3c7',
        border_card: '#34495e'
      }
    },
    dark: {
      palette: {
        text_navbar: '#ffffff',
        text_color: '#ffffff',
        app_bar: '#171717',
        bgr_board: '#212121',
        bgr_column: '#3d3d3d',
        bgr_card: '#000000b9',
        bgr_scroll_card: '#b2bec3',
        border_card: '#3498db'
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': { width: '6px', height: '5px' },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px',
            visibility: 'hidden'
          },

          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#dcdde1'
          },

          '*:hover::-webkit-scrollbar-thumb': {
            visibility: 'visible'
          },

          '*::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px !important',
          '&:hover': {
            borderWidth: '1px !important'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '1px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '0.875rem'
          }
        }
      }
    }
  }
})

export default theme
