import React, { useState } from "react";
import { HStack, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SiLinkedin, SiVercel } from "react-icons/si";
import { FaGithub, FaDev } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Footer({ menu }) {
    const [renderComplete, setRenderComplete] = useState(false);
    return (
        <Stack>
            <Stack my='2' gap='2' justifyContent='space-between'>
                <Stack>
                    <Text fontSize='xl' color='gray.700'>
                        Catur Hidayat
                    </Text>
                    <Text fontSize='sm' color='gray.700'>
                        Backend engineer
                    </Text>
                    <Text fontWeight='light' fontSize='xs' color='gray.800'>
                        <Link href='mailto:catur@windowslive.com'>
                            catur@windowslive.com
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
                    <Tag justifyContent='center' variant='ghost'>
                        <Link href='https://nextjs.org/' target='_blank'>
                            <Text fontSize='sm' mx='2'>
                                Made With NextJS
                            </Text>
                        </Link>
                        <TbBrandNextjs color='black' size='20px' />
                    </Tag>
                </Stack>
                <Stack>
                    <Tag justifyContent='center' variant='ghost'>
                        <Text fontSize='xl' fontWeight='normal' mx='2'>
                            Deploy With
                        </Text>
                        <SiVercel size='20px' color='black' />
                        <Link href='https://vercel.com' target='_blank'>
                            <Text fontSize='xl' fontWeight='bold' mx='2'>
                                Vercel
                            </Text>
                        </Link>
                    </Tag>
                </Stack>
            </Stack>
        </Stack>
    );
}
