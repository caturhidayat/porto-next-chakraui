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
    SiHtml5,
    SiChakraui,
    SiPrisma,
    SiBulma,
    SiDocker,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { ImNewTab } from "react-icons/im";

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
                    px='2'
                >
                    <CardBody>
                        <Heading size='md' mb='4' color='purple.700'>
                            {value.name}
                        </Heading>
                        <Divider colorScheme='purple' size='2px' />
                        <Text fontWeight='normal' fontSize='sm' mt='2'>
                            {value.description}
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Stack justifyItems='start'>
                            <HStack>
                                <Text fontSize='xl' fontWeight='normal'>
                                    Stack:
                                </Text>
                                {value.topics.map((topic) => (
                                    <HStack key={topic} >
                                        {topic === "javaScript" && (
                                            <HStack>
                                                <SiJavascript />
                                            </HStack>
                                        )}
                                        {topic === "typescript" && (
                                            <HStack>
                                                <SiTypescript />
                                            </HStack>
                                        )}
                                        {topic === "css" && (
                                            <HStack>
                                                <SiCss3 />
                                            </HStack>
                                        )}
                                        {topic === "pug" && (
                                            <HStack>
                                                <SiPug />
                                            </HStack>
                                        )}

                                        {topic === "shell" && (
                                            <HStack>
                                                <SiGnubash />
                                            </HStack>
                                        )}
                                        {topic === "docker" && (
                                            <HStack>
                                                <SiDocker />
                                            </HStack>
                                        )}
                                        {topic === "python" && (
                                            <HStack>
                                                <SiPython />
                                            </HStack>
                                        )}
                                        {topic === "html" && (
                                            <HStack>
                                                <SiHtml5 />
                                            </HStack>
                                        )}
                                        {topic === "handlebars" && (
                                            <HStack>
                                                <SiHandlebarsdotjs />
                                            </HStack>
                                        )}
                                        {topic === "nodejs" && (
                                            <HStack>
                                                <SiNodedotjs />
                                            </HStack>
                                        )}
                                        {topic === "expressjs" && (
                                            <HStack>
                                                <SiExpress />
                                            </HStack>
                                        )}
                                        {topic === "nextjs" && (
                                            <HStack>
                                                <TbBrandNextjs />
                                            </HStack>
                                        )}
                                        {topic === "postgresql" && (
                                            <HStack>
                                                <BiLogoPostgresql />
                                            </HStack>
                                        )}
                                        {topic === "prisma" && (
                                            <HStack>
                                                <SiPrisma />
                                            </HStack>
                                        )}
                                        {topic === "chakra-ui" && (
                                            <HStack>
                                                <SiChakraui />
                                            </HStack>
                                        )}
                                        {topic === "bulma-css" && (
                                            <HStack>
                                                <SiBulma />
                                            </HStack>
                                        )}
                                        {!topic && (
                                            <HStack>
                                                <Tag
                                                    size='sm'
                                                    colorScheme='orange'
                                                >
                                                    No Detected
                                                </Tag>
                                            </HStack>
                                        )}
                                    </HStack>
                                ))}
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
                                        <ImNewTab />
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
