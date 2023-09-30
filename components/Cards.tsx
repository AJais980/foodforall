"use client";
import React from 'react';
import {
    FaLeaf,
    FaHandsHelping,
    FaMapMarkerAlt,
    FaUsers,
    FaHeartbeat,
    FaComments,
} from "react-icons/fa";

const features = [
    {
        icon: <FaLeaf className="w-5 h-5" />,
        title: "Reduce Food Waste",
        description: "Food For All is committed to minimizing food waste by connecting surplus food providers with those in need. By redistributing excess food, we ensure it doesn't end up in landfills, making a positive impact on the environment.",
    },
    {
        icon: <FaHandsHelping className="w-5 h-5" />,
        title: "Community Support",
        description: "We foster a sense of community by facilitating food donations. Your contribution not only helps individuals facing food insecurity but also strengthens the bonds within our society.",
    },
    {
        icon: <FaMapMarkerAlt className="w-5 h-5" />,
        title: "Easy Donation",
        description: "Donating food has never been easier. With our user-friendly platform, you can quickly and conveniently share your surplus food with those who need it most, making a meaningful difference in just a few clicks.",
    },
    {
        icon: <FaHeartbeat className="w-5 h-5" />,
        title: "Promote Health",
        description: "Our focus on nutritious food options ensures that those in need receive balanced meals, promoting better health outcomes for individuals and communities.",
    },
    {
        icon: <FaUsers className="w-5 h-5" />,
        title: "Join a Network",
        description: "By choosing Food For All, you become part of a vast network of like-minded individuals and organizations working together to combat food waste and hunger.",
    },
    {
        icon: <FaComments className="w-5 h-5" />,
        title: "Raise Awareness",
        description: "Supporting Food For All means contributing to a larger mission of raising awareness about food wastage and its impact on our planet. Together, we can inspire change and create a more sustainable future.",
    },
];

const Cards = () => {
    return (
        <div>
            <div className="line"></div>
            <div className="w-full min-h-[calc(100vh - 80px)]">
                <section className="px-6 min-h-screen">
                    <div className="container flex flex-col gap-4 mx-auto px-7 md:px-12 lg:px-24 p-10">
                        <div className="mx-auto justify-items-center prose p-8 justify-center">
                            <h1 className="text-center font-extrabold">Why To Choose Food For All?</h1>
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
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
};

type MemoizedFeatureProps = {
    feature: Feature;
};

const MemoizedFeature = React.memo<MemoizedFeatureProps>(({ feature }) => (
    <div className="w-full bg-box p-3 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center justify-center gap-2 p-2 rounded bg-primary">
            {feature.icon}
            <h3 className="font-semibold text-xl">{feature.title}</h3>
        </div>
        <p className="text-base-content">{feature.description}</p>
    </div>
));