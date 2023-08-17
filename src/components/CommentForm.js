import React from 'react';
import { useMyContext } from './MyContextProvider';
import { addComment } from '../services/commentService';
import {
    Box,
    Input,
    Text,
    Textarea,
    Button,
    Flex
} from '@chakra-ui/react'
import {
    useForm
} from 'react-hook-form'


export default function CommentForm({ videoID }) {
    const {
        setIsFetchDetail
    } = useMyContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        if (data.comment.trim() === "") {
            return alert('You cannot input empty comment');
        }
        if (localStorage.getItem('USERNAME')) {
            data.username = localStorage.getItem('USERNAME');
            await addComment(videoID, data);
            await setIsFetchDetail(false);
            reset();
        }
        else {
            await addComment(videoID, data);
            await setIsFetchDetail(false);
            reset();
        }

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

    return (
        <Box borderBottom={'1px'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    localStorage.getItem('USERNAME') ?
                        <></>
                        :
                        <>
                            <Text
                                color={'white'}
                                fontSize={['xs', 'sm', 'md']}
                            >
                                Username :
                            </Text>
                            {
                                errors.username &&
                                requiredMessage
                            }
                            <Input
                                {...register("username", { required: true })}
                                placeholder="Enter username"
                                color={'white'}
                                size={['sm', 'sm', 'md']}
                            />
                            <Text
                                mt={2}
                                color={'white'}
                                fontSize={['xs', 'sm', 'md']}
                            >
                                Comment :
                            </Text>
                        </>
                }
                {
                    errors.comment &&
                    requiredMessage
                }
                <Textarea
                    {...register("comment", { required: true })}
                    placeholder="Enter comment"
                    color={'white'}
                    size={['sm', 'sm', 'md']}
                />
                <Flex justifyContent="flex-end">
                    <Button
                        type="submit"
                        m={2}
                        size={['xs', 'sm', 'md']}
                    >
                        Comment
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}