import Logo from "./logo";
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
    useColorModeValue,
    useColorMode,
    Button,
    Text
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const LinkItem = ({href, path, children}) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha-900')
    return (
        <Link href={href} p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
            {children}
        </Link>
    )
}

const NavBar = props => {
    const {path} = props
    const { toggleColorMode } = useColorMode()


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
                <IconButton aria-label="Toggle theme" icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)} onClick={toggleColorMode} colorScheme={useColorModeValue('purple', 'orange')} ></IconButton>
                <Box ml={2} display={{base:'inline-block', md:'none'}}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label="Options" />
                        <MenuList>
                            <MenuItem><Link href='/works'>Works</Link></MenuItem>
                            <MenuItem><Link href='/about'>Posts</Link></MenuItem>
                            <MenuItem><Link href='/about'>About</Link></MenuItem>
                            <MenuItem><Link href='/contact'>Contact Us</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            </Container>
        </Box>
    )
}

export default NavBar