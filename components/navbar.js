import Logo from "./logo";
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({href, path, children}) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha-900')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = props => {
    const {path} = props

    return (
        <Box position='fixed' as="nav" w='100%' bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}} zIndex={1} {...props} mt='md'>
            <Container display='flex' p={2} maxW="container.md" wrap='wrap' justify='space-between'>
                <Flex align='center' mr={5}>
                    <Logo></Logo>
                </Flex>
            <Stack 
            direction={{base: 'column', md: 'row'}} 
            display={{base: 'none', md: 'flex'}} 
            width={{base: 'full', md: 'auto'}}
            alignItems='center'
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            >
                <LinkItem href='/works' path={path}>Works</LinkItem>
                <LinkItem href='/posts' path={path}>Posts</LinkItem>
                <LinkItem href='/about' path={path}>About</LinkItem>
                <LinkItem href='/contact' path={path}>Contact Us</LinkItem>
            </Stack>
            <Box flex={1} align='right'>
                <Box ml={2} display={{base:'inline-block', md:'none'}}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label="Options" />
                        <MenuList>
                            <NextLink href='/works' passHref>
                                <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                            <NextLink href='/about' passHref>
                                <MenuItem as={Link}>Posts</MenuItem>
                            </NextLink>
                            <NextLink href='/about' passHref>
                                <MenuItem as={Link}>About</MenuItem>
                            </NextLink>
                            <NextLink href='/contact' passHref>
                                <MenuItem as={Link}>Contact Us</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            </Container>
        </Box>
    )
}

export default NavBar