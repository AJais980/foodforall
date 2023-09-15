import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 aria-label="Food For All" className="hero_title mt-10">
                <span className="animated-gradient-text_background"
                    style={{
                        "--content": "'Food'", // Note the single quotes around 'Food'
                        "--padding": "0.05em",
                        "--start-color": "var(--food-start-gradient)",
                        "--end-color": "var(--food-end-gradient)"
                    }}>
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-1">
                        Food
                    </span>
                </span>
                <span className="animated-gradient-text_background"
                    style={{
                        "--content": "'For'", // Note the single quotes around 'For'
                        "--padding": "0.05em",
                        "--start-color": "var(--for-start-gradient)",
                        "--end-color": "var(--for-end-gradient)"
                    }}>
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-2">
                        For
                    </span>
                </span>
                <span className="animated-gradient-text_background"
                    style={{
                        "--content": "'All'", // Note the single quotes around 'All'
                        "--padding": "0.05em",
                        "--start-color": "var(--all-start-gradient)",
                        "--end-color": "var(--all-end-gradient)"
                    }}>
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-3">
                        All
                    </span>
                </span>
            </h1>
        </div>
    );
};

export default Home;
