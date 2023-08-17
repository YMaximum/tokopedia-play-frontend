import React from 'react';
import YouTube from 'react-youtube';
import {
    Box,
    AspectRatio,
    Flex
} from '@chakra-ui/react'

export default function VideoPlayer({ embedID }) {
    const videoId = embedID;
    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <Flex w='100%' overflow={'auto'}>
            <Box w={'100%'}>
                <AspectRatio ratio={16 / 9}>
                    <YouTube videoId={videoId} opts={opts}/>
                </AspectRatio>
            </Box>
        </Flex>
    );
};


