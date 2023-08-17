import React from 'react';
import { useForm } from "react-hook-form"
import { deleteVideo } from '../services/videoService';
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
    Text,
    Select,
    MenuItem
} from '@chakra-ui/react'
import {
    AiFillDelete
} from 'react-icons/ai'


export default function DeleteVideoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        videos,
        setIsLoading
    } = useMyContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        await deleteVideo(data);
        await setIsLoading(true);
        reset();
    }

    const requiredMessage = [
        <Text
            key={0}
            fontSize={'sm'}
            as={'i'}
            color={'red.500'}
        >
            *This field is required
        </Text>
    ]

    const filterByUploader = (condition) => {
        try {
            const videoById = videos.filter(vid => vid.uploader === condition);
            return videoById;
        }
        catch (e) {
            console.log(`No video uploaded by ${condition} :::`, e.message)
            return [];
        }
    }

    const filteredVideos = filterByUploader(localStorage.getItem('USERNAME'));

    const mappedVideoOption = filteredVideos.map((data) => (
        <option key={data._id} value={data._id}>{data.title}</option>
    ))

    return (
        <>
            <MenuItem
                onClick={onOpen}
                size={['xs', 'sm', 'md']}
                icon={<AiFillDelete />}
            >
                Delete a Video
            </MenuItem>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                size={'4xl'}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete a Video</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <Text mt={2}>Select a video to delete :</Text>
                            {
                                errors.videoID &&
                                requiredMessage
                            }
                            <Select
                                {...register("videoID", { required: true })}
                                placeholder='Select your uploaded video'
                            >
                                {mappedVideoOption}
                            </Select>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" m={2}>Delete</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}