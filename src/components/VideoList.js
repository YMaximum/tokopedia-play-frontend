import React from 'react';
import VideoCard from './VideoCard';
import {
    SimpleGrid,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import {
    Link
} from 'react-router-dom';


export default function VideoList({ videos }) {
    const mappedVideoCard = videos.map((vid) => (
        <WrapItem>
            <Link to={`/videos/${vid._id}`} key={vid._id}>
                <VideoCard
                    id={vid._id}
                    title={vid.title}
                    thumbnailUrl={vid.thumbnailUrl}
                    uploader={vid.uploader}
                    deal={vid.deal}
                />
            </Link>
        </WrapItem>
    ))

    return (
        <Wrap spacing={'10px'}>
            {mappedVideoCard}
        </Wrap>
    )
}