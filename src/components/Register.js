import React from 'react';
import { useForm } from "react-hook-form"
import { registerUser } from '../services/userService';
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
    Text
} from '@chakra-ui/react'


export default function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        setIsLoading
    } = useMyContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        if (data.password.length < 8) {
            return alert('Password must at least 8 characters');
        }
        else {
            const response = await registerUser(data);
            if (response) {
                await setIsLoading(true);
                reset();
            }
            else {
                alert('The username is already taken');
            }
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
            >
                Register
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
                    <ModalHeader>Register as a creator</ModalHeader>
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
                            <Button type="submit" m={2}>Register</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}