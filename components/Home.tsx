import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 aria-label="Food For All" className="hero_title">
                <span className="animated-gradient-text_background txt-food">
                    <span className="animated-gradient-text_foreground-1">
                        Food
                    </span>
                </span>
                <span className="animated-gradient-text_background txt-for">
                    <span className="animated-gradient-text_foreground-2">
                        For
                    </span>
                </span>
                <span className="animated-gradient-text_background txt-all">
                    <span className="animated-gradient-text_foreground-3">
                        All
                    </span>
                </span>
            </h1>
        </div>
    );
};

export default Home;
