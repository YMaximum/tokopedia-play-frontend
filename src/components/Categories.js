import VideoList from "./VideoList";
import { useMyContext } from "./MyContextProvider";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Wrap
} from '@chakra-ui/react';
import React, {
    useEffect,
} from 'react';
import { motion } from 'framer-motion';


export default function Categories(props) {
    const {
        videos,
        videosByCategory,
        categoryTabs,
        vidGrouped,
        setVidGrouped,
        isLoading
    } = useMyContext();

    const mappedTabList = categoryTabs.map((tab) => (
        <motion.div
            whileHover={{ filter: 'brightness(1.4)' }}
            transition={{ duration: 0.2 }}
        >
            <Tab
                key={tab}
                bgColor={'gray.800'}
                color={'white'}
                fontSize={'sm'}
                h={'fit-content'}
            >
                {tab}
            </Tab>
        </motion.div>

    ));

    const findVideobyCategory = (condition) => {
        try {
            const vidByCategory = videosByCategory.find(vid => vid._id === condition);
            return vidByCategory.videos;
        }
        catch (e) {
            console.log(`No data in ${condition} category :::`, e.message)
            return [];
        }
    }

    useEffect(() => {
        setVidGrouped({
            ...vidGrouped,
            explore: findVideobyCategory('Explore'),
            sale: findVideobyCategory('Sale'),
            recommendation: findVideobyCategory('Recommendation'),
            officialStore: findVideobyCategory('Official Store'),
            gaming: findVideobyCategory('Gaming')
        })
    }, [isLoading])

    const mappedTabPanel = [
        'explore',
        'sale',
        'recommendation',
        'officialStore',
        'gaming'
    ].map((category) => (
        <TabPanel key={category}>
            <VideoList
                videos={vidGrouped[`${category}`]}
            />
        </TabPanel>
    ))

    return (
        <Tabs
            variant='soft-rounded'
            colorScheme='green'
            m={4}
        >
            <TabList ml={5}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Wrap>
                        {mappedTabList}
                    </Wrap>
                </motion.div>
            </TabList>
            <TabPanels>
                <TabPanel key={'All'}>
                    <VideoList
                        videos={videos}
                    />
                </TabPanel>
                {mappedTabPanel}
            </TabPanels>
        </Tabs >
    )
}