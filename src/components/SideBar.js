import React from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure
} from '@chakra-ui/react'
import {
    GiHamburgerMenu
} from 'react-icons/gi'


export default function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <GiHamburgerMenu
                color='white'
                size={'20px'}
                onClick={onOpen}
                style={{ cursor: 'pointer' }}
            />
            <Drawer
                placement={'left'}
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent
                    color={'white'}
                    bg={'gray.900'}
                >
                    <DrawerHeader
                        borderBottomWidth='1px'
                    >
                        Upcoming content here
                    </DrawerHeader>
                    <DrawerBody>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}