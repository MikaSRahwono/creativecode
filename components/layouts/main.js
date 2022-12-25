import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, inital-scale=1' />
                <title>CreativeCode - Home</title>
            </Head>

            <NavBar path={router.asPath}></NavBar>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main