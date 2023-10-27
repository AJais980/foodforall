"use client"
import MatrixPage from '@/components/Matrix';
import React, { useEffect, useRef, useState } from 'react';

const Page = () => {
    let fr = 'search_box';
    let style404 = (
        <div className="texts">
            <h1 className="title_404">
                <span>4</span>
                <span className="text_stroke">X</span>
                <span>4</span>
            </h1>
            <p className="text_404" style={{ fontWeight: 600 }}>
                Oops! You are in the <span className="matrix">matrix</span>
            </p>
            <p className="text_404">Click on the cross or search</p>
            <label htmlFor={fr}></label>
            <input type="search" name="search" id={fr} placeholder="Search" />
        </div>
    );

    return (
        <>
            <div id="card" className="card" data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-perspective="500">
                <a href="../../index.html" className="close_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#00FF11" viewBox="0 0 512 512">
                        <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
                    </svg>
                </a>
                {style404}
            </div>
            <MatrixPage />
            <script src="/script.js"></script>
        </>
    );
};

export default Page;
