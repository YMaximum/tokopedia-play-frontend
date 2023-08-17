import React from 'react';
import { useForm } from "react-hook-form"
import { addProduct } from '../services/productService';
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
    InputGroup,
    InputLeftAddon,
    MenuItem
} from '@chakra-ui/react'
import {
    BiCartAdd
} from 'react-icons/bi'


export default function AddProductModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        setIsFetchDetail,
        videos
    } = useMyContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        await addProduct(data);
        await setIsFetchDetail(false);
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

    const mappedVideoOption = filteredVideos.map((data, i) => (
        <option key={i} value={data._id}>{data.title}</option>
    ))

    return (
        <>
            <MenuItem
                onClick={onOpen}
                size={['xs', 'sm', 'md']}
                icon={<BiCartAdd />}
            >
                Add Product
            </MenuItem>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                size={'4xl'}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Product</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <Text mt={2}>Select video to place product :</Text>
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
                            <Text>Title :</Text>
                            {
                                errors.title &&
                                requiredMessage
                            }
                            <Input
                                {...register("title", { required: true })}
                                placeholder="Enter title"
                            />
                            <Text mt={2}>Product URL :</Text>
                            {
                                errors.productUrl &&
                                requiredMessage
                            }
                            <Input
                                {...register("productUrl", { required: true })}
                                placeholder="Enter product url"
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
                            <Text mt={2}>Price :</Text>
                            {
                                errors.price &&
                                requiredMessage
                            }
                            <InputGroup>
                                <InputLeftAddon>Rp</InputLeftAddon>
                                <Input
                                    {...register("price", { required: true })}
                                    type='number'
                                    placeholder="Enter price in Rp"
                                />
                            </InputGroup>
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