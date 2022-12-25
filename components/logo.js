import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    margin-top: 10px
`

const Logo = () => {
    const footPrintImg = `/images/Logo-full-${useColorModeValue('trans', 'white')}.png`

    return (
        <Link href='/'>
            <LogoBox>
                <Image src={footPrintImg} width={200} height={10} alt='logo'></Image>
            </LogoBox>
        </Link>
    )
}

export default Logo