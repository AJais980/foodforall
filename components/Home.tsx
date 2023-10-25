"use client"
import React from 'react';
import HeroTitle from './HeroTitle';
import HomeCards from './HomeCards';
import { useUser } from '@clerk/nextjs';

const Home = () => {
    const { isSignedIn, user } = useUser();
    if (isSignedIn) {
        fetch("/api/user/save", {
            method: "POST",
            body: JSON.stringify(user),
        });
    }
    return (
        <div className='relative'>
            <HeroTitle />
            <HomeCards />
        </div>
    );
};

export default Home;
