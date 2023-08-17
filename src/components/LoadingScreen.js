import React, { useEffect, useState } from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
    const loadingScreenVariants = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div
            variants={loadingScreenVariants}
            initial="initial"
            animate={'animate'}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <Center>
                <Spinner size="xl" color="white" />
            </Center>
        </motion.div>
    );
};
