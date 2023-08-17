import React from "react"
import {
    useForm
} from "react-hook-form"
import {
    Box,
    InputGroup,
    Input,
    InputRightAddon,
    Button,
    FormControl,
    Tooltip
} from '@chakra-ui/react'
import {
    BsSearch
} from 'react-icons/bs'
import {
    useNavigate
} from 'react-router-dom'


export default function SearchBar() {
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.searchQuery.length >= 3) {
            navigate(`/search?q=${data.searchQuery}`)
        }
    };

    return (
        <Tooltip
            label='Enter at least 3 characters'
            fontSize='md'
        >
            <Box w={'30%'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.searchQuery}>
                        <InputGroup
                            color={'white'}
                            size={['xs', 'xs', 'sm']}
                        >
                            <Input
                                type='text'
                                placeholder='Search'
                                {...register('searchQuery')}
                            />
                            <InputRightAddon>
                                <Button size={['xs','xs','sm']} type='submit'>
                                    <BsSearch color='black' />
                                </Button>
                            </InputRightAddon>
                        </InputGroup>
                    </FormControl>
                </form>
            </Box>
        </Tooltip>
    )
}