"use client";
import Link from 'next/link';
import React from 'react';
import {
    BiDonateHeart,
    BiCartAdd,
    BiArrowFromLeft
} from "react-icons/bi";

const features = [
    {
        icon: <BiDonateHeart className="w-5 h-5" />,
        title: "Donate Surplus Food",
        description: "Help us rescue surplus food and distribute it to those in need. Your contribution can make a real difference.",
        link: "/manage/donate",
        points: [
            "Reduce food waste and help the environment.",
            "Provide meals to individuals and families in need.",
            "Join a community of like - minded people making a positive impact."
        ]
    },
    {
        icon: <BiCartAdd className="w-5 h-5" />,
        title: "Buy Surplus Food",
        description: "Shop for high-quality surplus food items at discounted prices. Every purchase helps reduce waste and supports the community.",
        link: "/manage/buy",
        points: [
            "Access a variety of fresh and packaged surplus food items.",
            "Save money on groceries while supporting a great cause.",
            "Contribute to reducing food waste and promoting sustainability."
        ]
    },
];

const headingStyle = {
    "display": "inline-block",
    "verticalAlign": "top",
    "textDecoration": "inherit",
    "textWrap": "balance"
};

const Cards = () => {
    return (
        <div>
            <div className="w-full min-h-[calc(100vh - 80px)]">
                <section className="px-6 min-h-screen">
                    <div className="container flex flex-col gap-4 mx-auto px-7 md:px-12 lg:px-24 p-10">
                        <div className="mx-auto justify-items-center prose p-2 justify-center">
                            <h1 className="text-center font-extrabold">Surplus Food Explorer</h1>
                        </div>
                        <span className='text-center justify-items-center justify-center' style={headingStyle}>
                            At Surplus Food Explorer, we're on a mission to eliminate wastage of food and ensure that surplus food reaches those who need it most. Join us in making a positive impact on our communities. Click on any of the below available box which suits you.
                        </span>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-2">
                            {features.map((feature, index) => (
                                <MemoizedFeature key={index} feature={feature} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Cards

type Feature = {
    icon: React.JSX.Element;
    title: string;
    description: string;
    link: string;
    points: string[];
};

type MemoizedFeatureProps = {
    feature: Feature;
};

const MemoizedFeature = React.memo<MemoizedFeatureProps>(({ feature }) => (
    <Link href={feature.link}>
        <div className="w-full bg-box p-3 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-center gap-2 p-2 rounded bg-primary">
                {feature.icon}
                <div className="font-bold text-xl">{feature.title}</div>
            </div>

            <div className="w-full flex flex-row flex-nowrap gap-2">
                <div className='grow flex flex-col gap-1 items-start justify-center pt-1'>
                    <div className="font-semibold">{feature.description}</div>
                    {feature.points.map((f, index) =>
                        <div key={index} className='flex flex-row flex-nowrap gap-2 items-center justify-center'>
                            <BiArrowFromLeft className='w-10 h-6' />
                            <div className='font-normal'>
                                {f}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Link>
));