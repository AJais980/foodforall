import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-full'>
                <footer className='bg-base-100/50 backdrop-blur-sm'>
                    <div className="w-full">
                        <div className="shadow-inner container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                            <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
                                <div className='flex font-medium items-center md:justify-start justify-center cursor-pointer'>
                                    <div className='w-10 h-10 m-1'>
                                        <img src="/logo.jpg" alt="Logo" className='rounded-full' />
                                    </div>
                                    <span className="font-semibold text-xl align-middle inline-block">Food For All</span>
                                </div>
                                <p className="mt-2 text-sm">Food Waste Benefits No One</p>
                            </div>
                            <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end'>
                                <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                                    <h2 className="font-semibold tracking-widest text-lg mb-3">Useful Links</h2>
                                    <nav className='list-none mb-10'>
                                        <ul>
                                            <li>
                                                <a className="nav-item svelte-17ej2r8" href="/">Home</a>
                                            </li>
                                            <li>
                                                <a className="nav-item svelte-17ej2r8" href="/manage">Manage</a>
                                            </li>
                                            <li>
                                                <a className="nav-item svelte-17ej2r8" href="/items">Items</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className='bg-base-300'>
                            <div className='container mx-auto py-4 px-5 text-center'>
                                <p>© 2023 Food For All. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer