import React, {
    useEffect
} from 'react';
import { getComments } from '../services/commentService';
import { useMyContext } from './MyContextProvider';
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Flex,
    Avatar,
    IconButton,
    Image,
    Button,
    AspectRatio
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";




export default function Comments({ videoID }) {
    const {
        comments
    } = useMyContext();

    const filterByVideoID = (condition) => {
        try {
            const commentById = comments.filter(com => com.videoID === condition);
            return commentById;
        }
        catch (e) {
            console.log(`No comments data in ${condition} id :::`, e.message)
            return [];
        }
    }
    
    const filteredComments = filterByVideoID(videoID);

    const mappedComment = filteredComments.map((data) => (
        <Card
            bg={'black'}
            color={'white'}
            key={data._id}
            size={['xs', 'sm', 'md']}
        >
            <CardBody>
                <Box>
                    <Flex>
                        <Flex
                            gap='4'
                            alignItems='center'
                            flexWrap='wrap'
                        >
                            <Avatar
                                name={data.username}
                                bg={'white'}
                                color={'black'}
                                size={['sm', 'sm', 'md']}
                            />
                            <Box>
                                <Heading size={['sm', 'sm', 'md']}>{data.username}</Heading>
                                <Text fontSize={['xs', 'sm', 'md']}>Creator</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Text mt={2} fontSize={['sm', 'sm', 'md']}>
                        {data.comment}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    ))

    return (
        <Box>
            {mappedComment}
        </Box>
    )
}