import React from 'react';
import { useForm } from "react-hook-form"
import { addVideo } from "../services/videoService";
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
    Select,
    MenuItem
} from '@chakra-ui/react'
import {
    MdAddBox
} from 'react-icons/md'

export default function AddVideoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        setIsLoading,
        categoryTabs
    } = useMyContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        data.uploader = localStorage.getItem('USERNAME');
        await addVideo(data);
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

    const mappedCategoryOption = categoryTabs.map((data, i) => (
        <option key={i} value={data}>{data}</option>
    ))

    return (
        <>
            <MenuItem
                onClick={onOpen}
                size={['xs', 'sm', 'md']}
                icon={<MdAddBox/>}
            >
                Add Video
            </MenuItem>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                size={'4xl'}
                isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Video</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <Text>Title :</Text>
                            {
                                errors.title &&
                                requiredMessage
                            }
                            <Input
                                {...register("title", { required: true })}
                                placeholder="Enter title"
                            />
                            <Text mt={2}>Thumbnail URL :</Text>
                            {
                                errors.thumbnailUrl &&
                                requiredMessage
                            }
                            <Input
                                {...register("thumbnailUrl", { required: true })}
                                placeholder="Enter thumbnail URL"
                            />
                            <Text mt={2}>Embed youtube VIDEO_ID:</Text>
                            {
                                errors.embedID &&
                                requiredMessage
                            }
                            <Input
                                {...register("embedID", { required: true })}
                                placeholder="Enter 'xxxx' from https://www.youtube.com/embed/xxxx"
                            />
                            <Text mt={2}>Category :</Text>
                            {
                                errors.category &&
                                requiredMessage
                            }
                            <Select
                                {...register("category", { required: true })}
                                placeholder='Select category'
                            >
                                {mappedCategoryOption}
                            </Select>
                            <Text mt={2}>Deal :</Text>
                            <Input
                                {...register("deal")}
                                placeholder="Enter a deal (optional)"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" m={2}>Add</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}