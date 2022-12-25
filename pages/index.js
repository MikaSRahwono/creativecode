import { Container, Box, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container mt={10}>
      <Box borderRadius='lg' bg='red' p={3} mb={5} align='center'>
        Hello, We Are a Software Agency based in Indonesia
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            CreativeCode
          </Heading>
          <p>Sofware Agency (Web Development, Mobile Apps Development, UI/UX Designs)</p>
        </Box>
      </Box>
    </Container>
  )
}
