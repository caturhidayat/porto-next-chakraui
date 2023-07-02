import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";

export default function MenuBar({ menu }) {
    return (
        <Flex
            minWidth='max-content'
            alignItems='center'
            height='80px'
            gap='2'
            mx='3'
            color='blackAlpha.800'
        >
            <Box p='2'>
                <Heading fontSize='2xl' size='md'>
                    <Link href='/'>Catur Hidayat</Link>
                </Heading>
            </Box>
            {menu.map((value, key) => (
                <Box p='2' key={key}>
                    <Text fontSize='md' fontWeight='normal'>
                        <Link href={value.link}>{value.name}</Link>
                    </Text>
                </Box>
            ))}
        </Flex>
    );
}
