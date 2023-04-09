// pages/_app.js
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import "@fontsource/stalemate"
import '../styles/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

const colors ={
brand: {
  50: "#ecefff",
  100: "#cbceeb",
  200: "#a9aed6",
  300: "#888ec5",
  400: "#666db3",
  500: "#4d5499",
  600: "#3c4178",
  700: "#2a2f57",
  800: "#181c37",
  900: "#080819"
}
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const fonts = {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
}


const config = {
  // initialColorMode: "dark",
  useSystemColorMode: false
};




const theme = extendTheme({ fonts , breakpoints , colors, config})

// 3. Pass the `theme` prop to the `ChakraProvider`
function App({ Component, pageProps }) {
  return (
    <ChakraProvider  theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App