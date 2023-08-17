import React, {
    useState,
    useEffect
} from 'react';
import AddVideoModal from "./AddVideoModal";
import AddProductModal from './AddProductModal';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import { useMyContext } from './MyContextProvider';
import { logoutUser } from '../services/userService';
import {
    Box,
    Button,
    Container,
    Text,
    Flex,
    Heading,
    Spacer,
    ButtonGroup,
    Input,
    InputGroup,
    InputRightElement,
    InputRightAddon
} from '@chakra-ui/react'
import {
    BsSearch
} from 'react-icons/bs'
import {
    Link
} from 'react-router-dom';
import {
    GiHamburgerMenu
} from 'react-icons/gi'
import {
    motion
} from 'framer-motion'


export default function Navbar() {
    const { setIsLoading } = useMyContext();
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Box
                position={scrolled ? 'fixed' : 'relative'}
                top='0'
                left='0'
                right='0'
                zIndex='1000'
                minWidth='100%'
            >
                <Flex
                    alignItems='center'
                    h={'6vh'}
                    p={4}
                    bgColor={'gray.900'}
                    borderBottom={'1px'}
                    justify={'space-between'}
                    pl={6}
                >
                    <Flex
                        alignItems={'center'}
                        gap={3}
                    >
                        <SideBar />
                        <Link to={`/`}>
                            <Heading
                                size={['sm', 'sm', 'md']}
                                color={'green.200'}
                            >
                                Tokopedia Play
                            </Heading>
                        </Link>
                    </Flex>
                    <SearchBar />
                    <ButtonGroup gap='2'>
                        {
                            localStorage.getItem('USERNAME') ?
                                <>
                                    <Profile />
                                </>
                                :
                                <>
                                    <Login />
                                    <Register />
                                </>
                        }

                    </ButtonGroup>
                </Flex>
            </Box>
        </motion.div>
    )
}

