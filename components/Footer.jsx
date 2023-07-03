import React, { useState } from "react";
import { Flex, HStack, Spacer, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SiLinkedin, SiVercel } from "react-icons/si";
import { FaGithub, FaDev } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";


export default function Footer({ menu }) {
    const [renderComplete, setRenderComplete] = useState(false);
    return (
        <Stack>
            <Stack my='2' gap='2' justifyContent='space-between'>
                <Flex>
                    <Stack px='40px'>
                        <Text fontSize='2xl' color='gray.700'>
                            Catur Hidayat
                        </Text>
                        <Text fontSize='md' color='gray.700'>
                            Backend engineer
                        </Text>
                        <Text fontWeight='light' fontSize='sm' color='gray.800'>
                            <Link href='mailto:caturhidayat00@gmail.com'>
                                caturhidayat00@gmail.com
                            </Link>
                        </Text>
                        <HStack>
                            <Link href='https://www.linkedin.com/in/caturhidayat/'>
                                <Tag ml='1' colorScheme='blackAlpha.700'>
                                    <SiLinkedin size='20px' />
                                </Tag>
                            </Link>
                            <Link href='https://github.com/caturhidayat'>
                                <Tag ml='1' colorScheme='blackAlpha.700'>
                                    <FaGithub size='20px' />
                                </Tag>
                            </Link>
                            <Link href='https://dev.to/brokylabs'>
                                <Tag ml='1' colorScheme='blackAlpha.700'>
                                    <FaDev size='20px' />
                                </Tag>
                            </Link>
                        </HStack>
                    </Stack>
                    <Spacer />
                    <Stack px='50px' textAlign='right'>
                        <Text fontSize='sm' fontWeight='normal' color='gray.700'>
                            Copyright © 2023 Catur Hidayat
                        </Text>
                        <Text fontSize='sm' fontWeight='normal' color='gray.700'>
                            All rights reserved
                        </Text>
                        <Text fontSize='sm' fontWeight='normal' color='gray.700'>
                            Made with ton ❤️ in Indonesia 
                        </Text>
                        
                    </Stack>
                </Flex>

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
