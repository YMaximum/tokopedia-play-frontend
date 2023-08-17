import React from 'react';
import { useForm } from "react-hook-form"
import { loginUser } from '../services/userService';
import { useMyContext } from "./MyContextProvider";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Text,
} from '@chakra-ui/react'


export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        setIsLoading
    } = useMyContext();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const response = await loginUser(data);
        if (response) {
            await setIsLoading(true);
            reset();
        }
        else {
            alert('Invalid credentials');
        }
    };

    const requiredMessage = [
        <Text
            key={0}
            fontSize={'sm'}
            as={'i'}
            color={'red.500'}
        >
            *This field is required
        </Text>
    ];

    return (
        <>
            <Button
                onClick={onOpen}
                size={['xs', 'sm', 'md']}
                colorScheme='green'
            >
                Login
            </Button>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                size={'md'}
                isCentered
            >
                <ModalOverlay />
                <ModalContent
                    bg={'gray.900'}
                    color={'white'}
                >
                    <ModalHeader>Login as a creator</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <Text>Username :</Text>
                            {
                                errors.username &&
                                requiredMessage
                            }
                            <Input
                                {...register("username", { required: true })}
                                placeholder="Enter username"
                            />
                            <Text mt={2}>Password :</Text>
                            {
                                errors.password &&
                                requiredMessage
                            }
                            <Input
                                {...register("password", { required: true })}
                                placeholder="Enter password"
                                type='password'
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" m={2}>Login</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}