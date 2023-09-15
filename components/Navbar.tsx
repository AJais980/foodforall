"use client";

import { useState, useEffect } from 'react';
import { ImSun } from 'react-icons/im';
import { BiMoon } from 'react-icons/bi';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineManageHistory } from 'react-icons/md';
import { PiSignIn } from 'react-icons/pi';
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
    const [theme, setTheme] = useState<String>('light');
    const { isSignedIn } = useUser();
    useEffect(() => {
        const userPreferredTheme = localStorage.getItem('theme');
        if (userPreferredTheme) {
            setTheme(userPreferredTheme);
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.dataset.theme = 'dark';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.dataset.theme = 'light';
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className='h-20 w-full z-50 px-4 py-4 top-0 bg-base-200 bg-transparent bg-opacity-25 filter shadow-sm backdrop-filter backdrop-blur-lg sticky'>
            <div className='flex flex-row-reverse'>
                <div className='flex-1'>
                    <div className='flex flex-row-reverse gap-1'>
                        <div className='flex-none'>
                            {isSignedIn ? (
                                <>
                                    <div className='relative btn btn-square btn-ghost w-10 h-10'>
                                        <UserButton afterSignOutUrl="/" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='relative btn btn-square btn-ghost w-10 h-10'>
                                        <SignInButton>
                                            <PiSignIn className='fill-current w-6 h-6' />
                                        </SignInButton>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className='flex-none'>
                            <label className="btn btn-square btn-ghost swap swap-rotate">
                                <input
                                    type="checkbox"
                                    id="themeToggle"
                                    checked={theme === 'dark'}
                                    onChange={handleToggle}
                                />
                                <ImSun className="swap-on fill-current w-6 h-6"></ImSun>
                                <BiMoon className="swap-off fill-current w-6 h-6"></BiMoon>
                            </label>
                        </div>
                        <div className='flex-none'>
                            <a href='/items' className='relative btn btn-square btn-ghost'>
                                <AiOutlineShoppingCart className='fill-current w-6 h-6'></AiOutlineShoppingCart>
                            </a>
                        </div>
                        <div className='flex-none'>
                            <a href='/manage' className='relative btn btn-square btn-ghost'>
                                <MdOutlineManageHistory className='fill-current w-6 h-6'></MdOutlineManageHistory>
                            </a>
                        </div>
                        <div className='flex-none'>
                            <a href='/' className='relative btn btn-square btn-ghost'>
                                <AiOutlineHome className='fill-current w-6 h-6'></AiOutlineHome>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="/" className='flex-none'>
                    <div className='w-10 h-10 m-1'>
                        <img src="/logo.jpg" className='rounded-full' alt="Logo" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Navbar