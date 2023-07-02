import {
    Text,
    Heading,
    Stack,
    Card,
    CardBody,
    Image,
    Tag,
    TagLabel,
} from "@chakra-ui/react";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma, SiChakraui, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Navbar({ profile = [] }) {
    return (
        <Card maxW='sm'>
            <CardBody my='10'>
                <Stack>
                    <Image
                        boxSize={{ base: "80px", md: "220px" }}
                        src={profile.avatar_url}
                        alt='Github Avatar'
                        borderRadius='lg'
                        mx={{ base: "0", md: "auto" }}
                    />
                </Stack>
                <Stack mt='6' spacing='3'>
                    <Heading size='lg' color='blackAlpha.800'>
                        Who I am
                    </Heading>
                    <Text fontWeight='light' fontSize='lg'>
                        Hi, I am{" "}
                        <Text as='b' color='purple.700'>
                            {profile.name}
                        </Text>
                    </Text>
                    <Text fontWeight='light' fontSize='lg'>
                        {profile.bio}
                    </Text>
                    <Text fontSize='xl' color='blackAlpha.800'>
                        Stack That I Use:
                    </Text>

                    <Text>
                        <Tag
                            mt='2'
                            ml='2'
                            colorScheme='green'
                            variant='outline'
                        >
                            <FaNodeJs />
                            <TagLabel pl='2'>NodeJS</TagLabel>
                        </Tag>
                        <Tag mt='2' ml='2' colorScheme='gray' variant='outline'>
                            <SiExpress />
                            <TagLabel pl='2'>ExpressJS</TagLabel>
                        </Tag>
                        <Tag mt='2' ml='2' colorScheme='gray' variant='outline'>
                            <TbBrandNextjs />
                            <TagLabel pl='2'>NextJS</TagLabel>
                        </Tag>
                        <Tag
                            mt='2'
                            ml='2'
                            colorScheme='telegram'
                            variant='outline'
                        >
                            <BiLogoPostgresql />
                            <TagLabel pl='2'>PgSQL</TagLabel>
                        </Tag>
                        <Tag
                            mt='2'
                            ml='2'
                            colorScheme='purple'
                            variant='outline'
                        >
                            <SiPrisma />
                            <TagLabel pl='2'>Prisma.io</TagLabel>
                        </Tag>
                        <Tag mt='2' ml='2' colorScheme='teal' variant='outline'>
                            <SiChakraui />
                            <TagLabel pl='2'>Chakra UI</TagLabel>
                        </Tag>
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    );
}
