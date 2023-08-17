import React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
    Box,
    Flex
} from '@chakra-ui/react';
import {
    RiShoppingBasket2Fill
} from 'react-icons/ri'
import {
    LiaShoppingCartSolid
} from 'react-icons/lia'


export default function VideoCard({ id, title, thumbnailUrl, uploader, deal }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                filter: 'brightness(1.4)',
                transition: {
                    duration: 0.2,
                },
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Card
                id={id}
                bgColor={'gray.900'}
                minH={'340px'}
                maxH={'340px'}
                minW={'340px'}
                maxW={'340px'}
            >
                <CardBody>
                    <Image
                        src={thumbnailUrl}
                        borderRadius='lg'
                        maxH={'xs'}
                        fit={'contain'}
                    />
                    <Stack mt={'2'} spacing='1'>
                        <Box
                            bg={'green.400'}
                            maxW={'fit-content'}
                        >
                            <Flex gap={1}>
                                <LiaShoppingCartSolid />
                                <Text
                                    color={'white'}
                                    fontSize={'12px'}
                                    pr={1}
                                >
                                    {deal}
                                </Text>
                            </Flex>
                        </Box>
                        <Box
                            maxH={'70px'}
                            overflow={'hidden'}
                        >
                            <Text color={'white'}>
                                {title}
                            </Text>
                        </Box>
                        <Text
                            color='green.200'
                            fontSize={'14px'}
                        >
                            {uploader}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    )
}