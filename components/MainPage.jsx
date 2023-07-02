import React from "react";
import {
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Tag,
    Stack,
    HStack,
    Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import {
    SiJavascript,
    SiExpress,
    SiHandlebarsdotjs,
    SiNodedotjs,
    SiPython,
    SiCss3,
    SiTypescript,
    SiPug,
    SiGnubash,
    SiHtml5
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function MainPage({ repos }) {
    // const [visibleItems, setVisibleItem]= useState(6)
    const sortedData = repos.filter((repo) => repo.fork === false);
    // console.log({sortedData})

    return (
        // console.log({repos}),

        <SimpleGrid
            mt='10'
            spacing={2}
            templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
        >
            {sortedData.map((value) => (
                <Card
                    key={value.id}
                    boxShadow='lg'
                    borderWidth='1px'
                    borderColor='purple.200'
                    bg='purple.40'
                    px='2'
                >
                    <CardBody>
                        <Heading size='md' mb='4' color='purple.700'>{value.name}</Heading>
                        <Divider colorScheme="purple" size='2px' />
                        <Text fontWeight='normal' fontSize='sm' mt='2'>
                            {value.description}
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Stack justifyItems='start'>
                            <HStack>
                                <Text fontSize='sm' fontWeight='semibold'>
                                    Stack:
                                </Text>

                                {value.topics === "javascript" && (
                                    <HStack>
                                        <SiJavascript />
                                    </HStack>
                                )}
                                {value.topics === "TypeScript" && (
                                    <HStack>
                                        <SiTypescript />
                                    </HStack>
                                )}
                                {value.topics === "css" && (
                                    <HStack>
                                        <SiCss3 />
                                    </HStack>
                                )}
                                {value.topics === "pug" && (
                                    <HStack>
                                        <SiPug />
                                    </HStack>
                                )}
                                {value.topics === "shell" && (
                                    <HStack>
                                        <SiGnubash />
                                    </HStack>
                                )}
                                {value.topics === "python" && (
                                    <HStack>
                                        <SiPython />
                                    </HStack>
                                )}
                                {value.topics === "html" && (
                                    <HStack>
                                        <SiHtml5 />
                                    </HStack>
                                )}
                                {value.topics === "handlebars" && (
                                    <HStack>
                                        <SiHandlebarsdotjs />
                                    </HStack>
                                )}
                                {value.language === "NextJS" && (
                                    <HStack>
                                        <TbBrandNextjs />
                                    </HStack>
                                )}
                                {value.language === "ExpressJS" && (
                                    <HStack>
                                        <SiExpress />
                                    </HStack>
                                )}
                                {!value.language && (
                                    <HStack>
                                        <Tag size='sm' colorScheme='orange'>
                                            No Detected
                                        </Tag>
                                    </HStack>
                                )}
                            </HStack>
                            <HStack justifyItems='start' justifyContent='start'>
                                <Text fontSize='sm' fontWeight='semibold'>
                                    Repo:
                                </Text>
                                <Link href={value.html_url} target='_blank'>
                                    <Tag
                                        variant='outline'
                                        colorScheme='purple'
                                        // justifyContent='end'
                                    >
                                        View here
                                    </Tag>
                                </Link>
                            </HStack>
                            <HStack>
                                <Text fontSize='sm'>
                                    {value.fork === true ? (
                                        <Tag
                                            size='sm'
                                            variant='outline'
                                            colorScheme='red'
                                            // justifyContent='end'
                                        >
                                            Forked from another repo
                                        </Tag>
                                    ) : null}
                                </Text>
                            </HStack>
                        </Stack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    );
}
