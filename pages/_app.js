import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
      <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}
