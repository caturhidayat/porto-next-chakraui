import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/layout";
import { Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Headers({ menu = [] }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("white", "black");
    const color = useColorModeValue("blackAlpha", "whiteAlpha");
    return (
        <Flex
            minWidth='max-content'
            alignItems='center'
            height='80px'
            gap='2'
            px='3'
        >
            <Box p='2'>
                <Button fontSize='2xl' fontWeight='extrabold' size='md' variant='link'>
                    Catur Hidayat
                </Button>
                
            </Box>
            {menu.map((value, key) => (
                <Box pl='4' key={key} >
                    <Button fontSize='md' fontWeight='semibold' variant='link'>
                        <Link href={value.link}>{value.name}</Link>
                    </Button>
                </Box>
            ))}
            <Spacer />
            <Button onClick={toggleColorMode} mr='100px'>
                {colorMode === "light" ? "🌓 Dark" : "🌞 Light"}
            </Button>
        </Flex>
    );
}
