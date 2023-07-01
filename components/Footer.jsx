import React from "react";
import { Button, HStack, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { FaGithub, FaDev } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Footer({ menu }) {
    return (
        <Stack my='4' gap='2' justifyContent='space-between'>
            <Stack>
                <Text fontSize='xl' color='gray.700'>
                    Catur Hidayat
                </Text>
                <Text fontSize='sm' color='gray.700'>
                    Full Stack Web Developer
                </Text>
                <Text fontWeight='medium' fontSize='xs' color='gray.700'>
                    Contact :
                    <Link href='mailto:catur@windowslive.com'>
                        <Text color='blue.400'>catur@windowslive.com</Text> 
                    </Link>
                </Text>
            </Stack>
            <HStack>
                <Link href='https://www.linkedin.com/in/caturhidayat/'>
                    <Tag ml='1' colorScheme='gray'>
                        <SiLinkedin size='20px' />
                    </Tag>
                </Link>
                <Link href='https://github.com/caturhidayat'>
                    <Tag ml='1' colorScheme='gray'>
                        <FaGithub size='20px' />
                    </Tag>
                </Link>
                <Link href='https://dev.to/brokylabs'>
                    <Tag ml='1' colorScheme='gray'>
                        <FaDev size='20px' />
                    </Tag>
                </Link>
            </HStack>
            <Stack>
                <Button justifyContent='center' variant='ghost'>
                    <Link href='https://nextjs.org/'>
                        <Text fontSize='xs' mx='2'>
                            Made With NextJS
                        </Text>
                    </Link>
                    <TbBrandNextjs size='20px' />
                </Button>
            </Stack>
        </Stack>
    );
}
