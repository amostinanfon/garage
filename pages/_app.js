// pages/_app.js
import '../styles/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}



// const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App