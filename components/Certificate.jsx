import React from "react";
import {
    Button,
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
    Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";
// import Image from "next/image";

export default function Certificate({ cert = [] }) {
    return (
        <SimpleGrid
            mt='10'
            spacing={2}
            templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
        >
            {cert.map((value) => (
                <Card
                    key={value.id}
                    boxShadow='lg'
                    borderWidth='1px'
                    borderColor='telegram.200'
                    px='2'
                >
                    <CardHeader>
                        <Heading size='md' color='telegram.700'>
                            {value.name}
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Image
                            src={value.image}
                            alt='Certificate'
                            borderRadius='lg'
                            bg='white'
                            mx={{ base: "0", md: "auto" }}
                        />
                        <Text fontWeight='normal' fontSize='sm' mt='2'>
                            {value.description}
                        </Text>
                        <Divider colorScheme='telegram' size='2px' my='4' />

                        <Link href={value.link} target='_blank'>
                            <Tag variant='outline' colorScheme='telegram'>
                                View here 
                                <ImNewTab />
                            </Tag>
                        </Link>
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    );
}

{
    /* <Card
                direction={{ base: "column", sm: "row" }}
                overflow='hidden'
                variant='outline'
                boxShadow='lg'
                borderWidth='1px'
                borderColor='telegram.200'
                bg='telegram.40'
                px='2'
            >
                <Stack>
                    <CardBody>
                        <Image
                            objectFit='cover'
                            width={{ base: "100%", md: "50%" }}
                            src='/logo/codecademy.png'
                            alt='Caffe Latte'
                        />
                        <Heading size='md'>Learn JavaScript Course</Heading>

                        <Text py='2' fontWeight='normal'>
                            Learn how to use JavaScript — a powerful and
                            flexible programming language for adding website
                            interactivity.
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Tag variant='outline' colorScheme='telegram'>
                            <Link
                                href='https://www.codecademy.com/profiles/BR0KY/certificates/705dcb15de0da4dd9d9fc4f3274b430e'
                                target='_blank'
                            >
                                View here
                            </Link>
                        </Tag>
                    </CardFooter>
                </Stack>
            </Card> */
}
