import React from 'react';
import { useMyContext } from './MyContextProvider';
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Flex,
    Box
} from "@chakra-ui/react";
import {
    BsCartPlus
} from 'react-icons/bs'
import {
    Link
} from 'react-router-dom'


export default function Products({ videoID }) {
    const {
        products
    } = useMyContext();

    const filterByVideoID = (condition) => {
        try {
            const productById = products.filter(prod => prod.videoID === condition);
            return productById;
        }
        catch (e) {
            console.log(`No comments data in ${condition} id :::`, e.message)
            return [];
        }
    }

    const filteredProducts = filterByVideoID(videoID);

    const formatCurrency = (amount) => {
        const parts = parseFloat(amount).toFixed(2).split('.');
        const formattedAmount = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return 'Rp' + formattedAmount;
    }

    const mappedProduct = filteredProducts.map((data) => (
        <Link
            to={data.productUrl}
            target='_blank'
        >
            <Card
                maxW={['2xs', 'xs', 'xs']}
                bg={'whiteAlpha.800'}
                key={data._id}
                mt={2}
            >
                <CardBody>
                    <Image
                        src={data.thumbnailUrl}
                        minH={'100px'}
                        minW={'200px'}
                        fit={'contain'}
                        borderRadius='lg'
                    />
                    <Stack
                        mt='6'
                        spacing='3'
                    >
                        <Heading
                            size={['xs', 'sm', 'md']}
                        >
                            {data.title}
                        </Heading>
                        <Text
                            color='blue.600'
                            fontSize={['xs', 'sm', 'xl']}
                        >
                            {formatCurrency(data.price)}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup
                        spacing='2'
                        size={['xs', 'sm', 'md']}
                    >
                        <Button
                            variant='ghost'
                            colorScheme='blue'
                        >
                            Buy now
                        </Button>
                        <Button
                            variant='solid'
                            colorScheme='green'
                        >
                            <Flex gap={2}>
                                <BsCartPlus />
                                Add to cart
                            </Flex>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Link>
    ))

    return (
        <Box>
            {mappedProduct}
        </Box>
    )
}