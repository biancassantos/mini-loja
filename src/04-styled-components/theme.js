import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body, html {
    background: ${({ theme }) => theme.bg};
    height: 100%;
  }
`

export const lightTheme = {
  bgHeader: '#FFFFFF',
  bg: '#F4F4F5',
  bgCard: '#FFFFFF',
  bgPromoBadge: '#FFA2A2',
  text: '#000000',
  textDimmed: '#525252',
  textAccent: '#F0FDF4',
  highlightDetails: '#006045',
  main: '#006045',
  accent: '#F0FDF4',
  starColor: '#FFD230',
  skeleton: '#e9e9ee',
  skeletonHighlight: '#ffffffa6',
  borderLine: '#E4E4E7',
  cardShadow: '0 0 15px 6px rgba(0, 0, 0, 0.06)'
}

export const darkTheme = {
  bgHeader: '#18181B',
  bg: '#27272A',
  bgCard: '#404040',
  bgPromoBadge: '#FFA2A2',
  text: '#FFFFFF',
  textDimmed: '#F4F4F5',
  textAccent: '#F0FDF4',
  highlightDetails: '#F0FDF4',
  main: '#006045',
  accent: '#F0FDF4',
  starColor: '#FFD230',
  skeleton: '#1c1d24',
  skeletonHighlight: '#2a2c34',
  borderLine: '#27272A',
  cardShadow: '0 0 15px 6px rgba(255, 255, 255, 0.06)'
}