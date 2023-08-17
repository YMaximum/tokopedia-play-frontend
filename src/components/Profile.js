import React from 'react';
import AddVideoModal from './AddVideoModal';
import AddProductModal from './AddProductModal';
import DeleteVideoModal from './DeleteVideoModal';
import { useMyContext } from './MyContextProvider';
import { logoutUser } from '../services/userService';
import {
    Avatar,
    Box,
    Text,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'

export default function Profile() {
    const { setIsLoading } = useMyContext();

    const logout = () => {
        logoutUser();
        setIsLoading(true);
    };

    return (
        <Menu>
            <MenuButton
                _hover={{ bg: 'gray.600' }}
                transition={'all 0.2s'}
                borderRadius={'lg'}
            >
                <Flex
                    alignItems={'center'}
                    gap={2}
                    p={1}
                >
                    <Avatar
                        name={localStorage.getItem('USERNAME')}
                        size={['xs', 'sm', 'sm']}
                    />
                    <Heading
                        color={'white'}
                        size={['sm', 'sm', 'md']}
                    >
                        {localStorage.getItem('USERNAME')}
                    </Heading>
                </Flex>
            </MenuButton>
            <MenuList>
                <AddVideoModal />
                <AddProductModal />
                <DeleteVideoModal/>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}