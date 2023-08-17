import React from 'react';
import Navbar from "./Navbar";
import Categories from "./Categories";
import LoadingScreen from './LoadingScreen';
import { useMyContext, MyContextProvider } from "./MyContextProvider";

function Content() {
    const { isLoading } = useMyContext();

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <>
            <Navbar />
            <Categories />
        </>
    )
}

export default function Home() {
    return (
        <MyContextProvider>
            <Content />
        </MyContextProvider>
    )
}