import React from 'react';
import {
    MyContextProvider,
    useMyContext
} from './MyContextProvider';
import VideoList from './VideoList';
import Navbar from './Navbar';
import {
    useLocation
} from 'react-router-dom'
import {
    Text,
    Box
} from '@chakra-ui/react'


function Content() {
    const { videos } = useMyContext();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');

    const resultsData = videos.filter(
        (vid) => vid.title.toLowerCase().includes(
            query.toLowerCase()
        )
    );

    return (
        <>
            <Navbar />
            <Box m={6}>
                <VideoList
                    videos={resultsData}
                />
            </Box>
        </>
    )
}

export default function SearchResults() {
    return (
        <MyContextProvider>
            <Content />
        </MyContextProvider>
    )
}