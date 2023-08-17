import Navbar from "./Navbar";
import VideoPlayer from "./VideoPlayer";
import LoadingScreen from './LoadingScreen';
import Comments from "./Comments";
import Products from "./Products";
import CommentForm from "./CommentForm";
import { useMyContext, MyContextProvider } from "./MyContextProvider";
import {
    Box,
    Heading,
    Flex,
} from "@chakra-ui/react";
import React, {
    useEffect,
    useState
} from "react";
import {
    useParams
} from 'react-router-dom'
import {
    motion
} from 'framer-motion'


function Content() {
    const { videoID } = useParams();
    const {
        isFetchDetail,
        fetchDetail,
        embedID,
        isFetchComments
    } = useMyContext();

    useEffect(() => {
        fetchDetail(videoID);
    }, [isFetchDetail]);

    if (!isFetchDetail) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Box>
                <Navbar />
                <Flex
                    direction={'row'}
                    gap={4}
                    m={6}
                >
                    <Box
                        w={'70%'}
                    >
                        <Flex
                            direction={'column'}
                            align={'stretch'}
                            justify={'flex-start'}
                            gap={5}
                        >
                            <VideoPlayer embedID={embedID} />
                            <Flex direction={'column'}>
                                <Heading
                                    color={'white'}
                                    size={['sm', 'sm', 'md']}
                                    mb={4}
                                >
                                    Comments
                                </Heading>
                                <CommentForm
                                    videoID={videoID}
                                />
                                <Comments
                                    videoID={videoID}
                                />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box w={'30%'} >
                        <Flex
                            overflow={'auto'}
                            direction={'column'}
                            alignItems={'start'}
                            gap={2}
                        >
                            <Heading
                                color={'white'}
                                size={['sm', 'sm', 'md']}
                                alignSelf={'start'}
                            >
                                Products
                            </Heading>
                            <Products 
                                videoID={videoID}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </motion.div>
    )
}

export default function VideoDetail() {
    return (
        <MyContextProvider>
            <Content />
        </MyContextProvider>
    )
}