import {
  StyleFunctionProps,
  extendBaseTheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { buttonTheme } from './components/button'

function formatFonts(fontArray: string[]): string {
  return fontArray.map((font) => `"${font}"`).join(',')
}

export const theme = extendBaseTheme({
  fonts: {
    heading: formatFonts(['Raleway', 'Roboto', 'Segoe UI', 'sans-serif']),
    body: formatFonts([
      'Roboto',
      'Segoe UI',
      'Helvetica Neue',
      'Noto Sans',
      'Liberation Sans',
      'Arial',
      'sans-serif',
      'system-ui',
      '-apple-system',
    ]),
    monospace: formatFonts([
      'IntelOne Mono',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]),
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('surface.50', 'surface.900')(props),
      },
    }),
  },
  // TODO: Define colors that match out theme @oli / @eric
  colors: {
    primary: {
      200: '#FFF2CC',
      400: "#FFC000",
      500: '#EBB100',
      600: '#D6C389',
    },
    surface: {
      "0": "#FFFFFF",
      "50": "#FAFAF9",
      "100": "#F5F2EF",
      "200": "#E7E5E4",
      "300": "#D6D3D1",
      "400": "#A8A29E",
      "500": "#78716C",
      "600": "#4C4747",
      "700": "#44403C",
      "800": "#292524",
      "900": "#191614",
      "1000": "#000000",
    },
    success: {
      "100": "#EDF2E9",
      "200": "#D3DEC9",
      "300": "#A6BE93",
      "400": "#7A9D5C",
      "500": "#4D7C26",
      "600": "#3A5D1D",
      "700": "#273E13",
      "800": "#131F0A",
    },
    destructive: {
      "100": "#F9EBE9",
      "200": "#F1CDC8",
      "300": "#E39B92",
      "400": "#DC2626",
      "500": "#B91C1C",
      "600": "#95291B",
      "700": "#641B12",
      "800": "#320E09",
    },
  },
  components: {
    Button: buttonTheme,
  },
})